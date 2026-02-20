<template>
  <div class="p-6">
    <h1 class="mb-6 text-2xl font-bold">کاربران </h1>

    <div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div class="overflow-x-auto">
        <table class="dataTable-table w-full text-right">
          <thead>
            <tr class="border-b border-gray-200 bg-gray-50">
              <th class="px-4 py-3 font-semibold">ردیف</th>
              <th class="px-4 py-3 font-semibold">نام</th>
              <th class="px-4 py-3 font-semibold">ایمیل</th>
              <th class="px-4 py-3 font-semibold">نقش</th>
              <th class="px-4 py-3 font-semibold">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="user.id"
              class="border-b border-gray-100 hover:bg-gray-50"
            >
              <td class="px-4 py-3">{{ index + 1 }}</td>
              <td class="px-4 py-3">{{ user.name }}</td>
              <td class="px-4 py-3">{{ user.email }}</td>
              <td class="px-4 py-3">{{ user.role }}</td>
              <td class="px-4 py-3">
                <span
                  class="rounded-full px-2 py-0.5 text-xs font-medium"
                  :class="user.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'"
                >
                  {{ user.active ? 'فعال' : 'غیرفعال' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//  جدول کاربران
const users = [
  { id: 1, name: 'علی احمدی', email: 'aliahmadi23@gmail.com', role: 'مدیر', active: true },
  { id: 2, name: 'سارا محمدی', email: 'saramohammadi@gmail.com', role: 'کاربر', active: true },
  { id: 3, name: 'رضا کریمی', email: 'rezakarimi24@gmail.com', role: 'کاربر', active: false },
  { id: 4, name: 'مریم زارعی', email: 'maryamzarei@gmai.com', role: 'ادمین', active: true },
  { id: 5, name: 'حسین رضایی', email: 'hoseinrezaee@gmail.com', role: 'کاربر', active: true }
]
</script>
