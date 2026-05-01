import { api } from '@/services/api'

// ✅ Types for upload functionality
export interface UploadMetadata {
  title: string
  category: string
  institution: string
  abstract: string
  tags: string[]
  authors: Array<{
    name: string
    role: string
    institution?: string
  }>
}

export interface UploadResponse {
  id: string
  status: 'processing' | 'completed' | 'failed'
  message: string
  resource?: {
    id: string
    title: string
    category: string
    institution: string
    fileSize: number
    uploadDate: string
  }
}

// ✅ Mock data flag - set to true to use mock data
const USE_MOCK_DATA = true

// ✅ Mock upload response
const mockUploadResponse: UploadResponse = {
  id: 'mock-upload-' + Date.now(),
  status: 'completed',
  message: 'Resource uploaded successfully',
  resource: {
    id: 'mock-resource-' + Date.now(),
    title: 'Mock Resource',
    category: 'Historical Archives',
    institution: 'Mock University',
    fileSize: 1024 * 1024, // 1MB
    uploadDate: new Date().toISOString()
  }
}

// ✅ Upload file with metadata
export const uploadResource = async (
  file: File,
  metadata: UploadMetadata
): Promise<UploadResponse> => {
  if (USE_MOCK_DATA) {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    return {
      ...mockUploadResponse,
      resource: {
        ...mockUploadResponse.resource!,
        title: metadata.title || file.name,
        category: metadata.category,
        institution: metadata.institution,
        fileSize: file.size
      }
    }
  }

  // Real implementation would use FormData for file upload
  const formData = new FormData()
  formData.append('file', file)
  formData.append('metadata', JSON.stringify(metadata))

  return api.post<UploadResponse>('/resources/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// ✅ Get upload progress (for real implementations)
export const getUploadProgress = (uploadId: string) => {
  if (USE_MOCK_DATA) {
    return Promise.resolve({
      id: uploadId,
      progress: 100,
      status: 'completed' as const,
      message: 'Upload completed successfully'
    })
  }

  return api.get(`/uploads/${uploadId}/progress`)
}

// ✅ Validate file before upload
export const validateFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 50 * 1024 * 1024 // 50MB
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/zip',
    'application/x-zip-compressed',
    'image/jpeg',
    'image/png',
    'image/gif',
    'video/mp4',
    'video/avi',
    'video/mov'
  ]

  if (file.size > maxSize) {
    return { valid: false, error: 'File size exceeds 50MB limit' }
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'File type not supported. Please upload PDF, DOCX, ZIP, or media files.' }
  }

  return { valid: true }
}