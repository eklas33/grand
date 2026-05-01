<template>
  <DashboardLayout>
    <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#7c3aed',
          borderRadius: 12,
          fontFamily: 'Inter, sans-serif',
        },
      }"
    >
      <div class="animate-fade-in space-y-10">
        <!-- ── HEADER SECTION (Image 4 Desktop Style) ── -->
        <section class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div class="flex items-center gap-4 mb-4">
               <h1 class="text-3xl font-black tracking-tight text-gray-900">Administrative Overview</h1>
            </div>
            <p class="text-[1.05rem] font-medium text-gray-500">Review pending submissions, manage user roles, and track system audits.</p>
          </div>
          <div class="flex items-center gap-3">
            <a-button size="large" class="rounded-xl border-none bg-[#f8f6ff] font-black text-trc text-[0.7rem] uppercase tracking-widest hover:bg-trc/10 h-12 px-6">Export Report</a-button>
            <a-button type="primary" size="large" class="rounded-xl font-black bg-trc text-[0.7rem] uppercase tracking-widest shadow-lg shadow-trc/20 h-12 px-8">Bulk Actions</a-button>
          </div>
        </section>

        <!-- ── STATS ROW (Image 4 Desktop Style) ── -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Pending Resources -->
          <div class="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-50 relative group hover:shadow-md transition-all">
             <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-trc">
                <FileSearchOutlined style="font-size: 24px" />
             </div>
             <div class="absolute top-8 right-8">
                <span class="rounded-full bg-[#f3f1ff] px-3 py-1 font-black uppercase text-[0.6rem] tracking-widest text-[#7c3aed]">REVIEW NEEDED</span>
             </div>
             <p class="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-1">Pending Resources</p>
             <h3 class="text-4xl font-black text-gray-900 tracking-tight">12</h3>
          </div>

          <!-- Active Curators -->
          <div class="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-50 relative group hover:shadow-md transition-all">
             <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <TeamOutlined style="font-size: 24px" />
             </div>
             <div class="absolute top-8 right-8">
                <span class="rounded-full bg-blue-50 px-3 py-1 font-black uppercase text-[0.6rem] tracking-widest text-blue-600">GROWTH +12%</span>
             </div>
             <p class="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-1">Active Curators</p>
             <h3 class="text-4xl font-black text-gray-900 tracking-tight">2.4k</h3>
          </div>

          <!-- Audit Logs -->
          <div class="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-50 relative group hover:shadow-md transition-all">
             <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <HistoryOutlined style="font-size: 24px" />
             </div>
             <div class="absolute top-8 right-8">
                <span class="rounded-full bg-orange-50 px-3 py-1 font-black uppercase text-[0.6rem] tracking-widest text-orange-600 border border-orange-200">REAL-TIME</span>
             </div>
             <p class="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-1">Audit Logs (Today)</p>
             <h3 class="text-4xl font-black text-gray-900 tracking-tight">849</h3>
          </div>
        </div>

        <!-- ── PENDING RESOURCES TABLE (Image 4 Desktop Style) ── -->
        <div class="rounded-[2.5rem] bg-white p-10 shadow-sm border border-gray-50">
          <div class="mb-10 flex items-center justify-between">
            <h2 class="text-2xl font-black text-gray-900 tracking-tight">Pending Resources</h2>
            <a-button type="link" class="p-0 font-black text-trc uppercase tracking-widest text-[0.75rem]">View All</a-button>
          </div>
          
          <a-table 
            :columns="pendingColumns" 
            :data-source="pendingData" 
            :pagination="false"
            class="trc-admin-table"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'title'">
                <div class="flex items-center gap-5 py-2">
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-trc shadow-sm">
                    <FilePdfOutlined v-if="record.type === 'PDF'" style="font-size: 18px" />
                    <PictureOutlined v-else style="font-size: 18px" />
                  </div>
                  <div class="min-w-0">
                    <p class="text-[0.95rem] font-black text-gray-900 truncate tracking-tight">{{ record.title }}</p>
                    <p class="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest">{{ record.info }}</p>
                  </div>
                </div>
              </template>
              
              <template v-if="column.key === 'submittedBy'">
                <div class="flex items-center gap-3">
                  <a-avatar :src="record.avatar" :size="36" class="border-2 border-white shadow-sm" />
                  <span class="text-[0.9rem] font-bold text-gray-700 tracking-tight">{{ record.submittedBy }}</span>
                </div>
              </template>

              <template v-if="column.key === 'status'">
                <span class="inline-flex rounded-lg bg-orange-50 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-widest text-orange-600 border border-orange-100">
                  PENDING
                </span>
              </template>

              <template v-if="column.key === 'actions'">
                <div class="flex items-center gap-3">
                   <a-button @click="handleApprove(record.id)" class="rounded-xl border-none bg-[#F3F1FF] px-5 text-[0.7rem] font-black uppercase tracking-widest text-trc hover:bg-trc hover:text-white transition-all h-9">Approve</a-button>
                   <a-button @click="handleReject(record.id)" class="rounded-xl border-none bg-red-50 px-5 text-[0.7rem] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-white transition-all h-9">Reject</a-button>
                </div>
              </template>
            </template>
          </a-table>

          <footer class="mt-8 flex items-center justify-between">
              <span class="text-[0.75rem] font-bold text-gray-400">Showing 1-10 of 12 resources</span>
              <div class="flex items-center gap-2">
                 <button class="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-trc"><LeftOutlined /></button>
                 <button class="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-trc"><RightOutlined /></button>
              </div>
          </footer>
        </div>

        <!-- ── BOTTOM GRID (User Management & Audit Logs) ── -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
           <!-- User Management -->
           <div class="xl:col-span-7 rounded-[2.5rem] bg-white p-10 shadow-sm border border-gray-50">
              <div class="mb-10 flex items-center justify-between">
                <h2 class="text-xl font-black text-gray-900 tracking-tight">User Management</h2>
                <a-button type="link" class="p-0 font-black text-trc uppercase tracking-widest text-[0.75rem]">See all</a-button>
              </div>
              <a-table :columns="userColumns" :data-source="users" :pagination="false" class="trc-admin-table no-border">
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'user'">
                    <div class="flex items-center gap-4">
                      <a-avatar :size="40" :style="{ backgroundColor: record.bg }" class="font-black text-[0.75rem]">{{ record.initials }}</a-avatar>
                      <div class="flex flex-col">
                        <span class="text-[0.9rem] font-black text-gray-900 tracking-tight">{{ record.name }}</span>
                        <span class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">{{ record.roleLabel }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-if="column.key === 'role'">
                     <span class="text-[0.7rem] font-black uppercase text-gray-400 tracking-widest">{{ record.role }}</span>
                  </template>
                  <template v-if="column.key === 'status'">
                    <div class="flex items-center gap-2">
                       <span class="h-2 w-2 rounded-full" :class="record.status === 'Verified' ? 'bg-purple-500' : 'bg-gray-300'"></span>
                       <span class="text-[0.75rem] font-bold" :class="record.status === 'Verified' ? 'text-trc' : 'text-gray-400'">{{ record.status }}</span>
                    </div>
                  </template>
                </template>
              </a-table>
           </div>

           <!-- Audit Logs Timeline -->
           <div class="xl:col-span-5 rounded-[2.5rem] bg-white p-10 shadow-sm border border-gray-50">
              <div class="mb-10 flex items-center justify-between">
                <h2 class="text-xl font-black text-gray-900 tracking-tight">Audit Logs</h2>
                <FilterOutlined class="text-gray-300 hover:text-trc transition-colors cursor-pointer" />
              </div>
              
              <a-timeline class="trc-admin-timeline">
                 <a-timeline-item v-for="(log, idx) in auditLogs" :key="idx" :color="log.color">
                   <div class="flex justify-between items-start -mt-1.5 ml-2">
                      <div class="flex flex-col">
                         <h4 class="text-[0.9rem] font-black text-gray-900 leading-tight mb-1">{{ log.action }}</h4>
                         <p class="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest">{{ log.context }}</p>
                      </div>
                      <span class="text-[0.75rem] font-bold text-gray-300 tabular-nums">{{ log.timestamp }}</span>
                   </div>
                 </a-timeline-item>
              </a-timeline>

              <button class="mt-8 w-full rounded-2xl bg-gray-50 py-4 text-[0.7rem] font-black uppercase tracking-widest text-gray-400 hover:bg-trc hover:text-white transition-all">View Full History</button>
           </div>
        </div>

      </div>
    </a-config-provider>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { 
  FileSearchOutlined, 
  TeamOutlined, 
  HistoryOutlined, 
  FilePdfOutlined, 
  PictureOutlined,
  CheckCircleOutlined, 
  EditOutlined, 
  CloseCircleOutlined, 
  CloudUploadOutlined,
  LeftOutlined,
  RightOutlined,
  FilterOutlined
} from '@ant-design/icons-vue'

// --- MOCK DATA (Synced with Image 4 Desktop) ---
const pendingColumns = [
  { title: 'TITLE', key: 'title' },
  { title: 'SUBMITTED BY', key: 'submittedBy' },
  { title: 'STATUS', key: 'status' },
  { title: 'SUBMISSION DATE', dataIndex: 'date', key: 'date' },
  { title: 'ACTIONS', key: 'actions', align: 'right' as const },
]

const pendingData = [
  { 
    id: 1, 
    title: 'Historic Preservation Strategy v2', 
    info: 'PDF • 4.2 MB', 
    submittedBy: 'Abebe Berhane', 
    avatar: 'https://ui-avatars.com/api/?name=Abebe+Berhane&background=f3f1ff&color=7c3aed',
    date: 'Oct 24, 2023',
    type: 'PDF'
  },
  { 
    id: 2, 
    title: 'Archeological Site Imagery', 
    info: 'Archive • 128 MB', 
    submittedBy: 'Sarah Jenkins', 
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=6C2BD9&color=fff',
    date: 'Oct 23, 2023',
    type: 'IMG'
  }
]

const userColumns = [
  { title: 'USER', key: 'user' },
  { title: 'ROLE', key: 'role' },
  { title: 'STATUS', key: 'status', align: 'right' as const },
]

const users = [
  { name: 'Hagos Kassa', initials: 'HK', roleLabel: 'Lead Editor', role: 'ADMIN', status: 'Verified', bg: '#F3F1FF' },
  { name: 'Marta Kidane', initials: 'MK', roleLabel: 'Field Researcher', role: 'USER', status: 'Pending', bg: '#F0F9FF' },
  { name: 'Yonas Tekle', initials: 'YT', roleLabel: 'Archivist', role: 'MODERATOR', status: 'Verified', bg: '#FFF7ED' },
]

const auditLogs = [
  { action: 'Resource Approved', context: 'Heritage Doc #2104', timestamp: '14:22:18', color: '#7c3aed' },
  { action: 'Settings Updated', context: 'Global Metadata Rules', timestamp: '12:05:45', color: '#6366f1' },
  { action: 'Access Denied', context: 'IP 192.168.1.45 (Unauthorized)', timestamp: '09:12:01', color: '#ef4444' },
  { action: 'Bulk Import Started', context: 'Archive_Batch_Oct.zip', timestamp: '08:45:33', color: '#7c3aed' },
]

const handleApprove = (id: number) => console.log(`[Admin Action] Approved #${id}`)
const handleReject = (id: number) => console.log(`[Admin Action] Rejected #${id}`)
</script>

<style>
/* Deep UI Customization for Admin Panel */
.trc-admin-table .ant-table-thead > tr > th {
  background: transparent !important;
  font-size: 0.7rem !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.15em !important;
  color: #cbd5e1 !important;
  border-bottom: 2px solid #f8fafc !important;
  padding: 20px 0 !important;
}

.trc-admin-table .ant-table-tbody > tr > td {
  padding: 24px 0 !important;
  border-bottom: 1px solid #f8fafc !important;
}

.trc-admin-table.no-border .ant-table-tbody > tr > td {
  border-bottom: none !important;
  padding: 16px 0 !important;
}

.trc-admin-timeline .ant-timeline-item-tail {
  border-inline-start: 2px solid #f1f5f9 !important;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>


