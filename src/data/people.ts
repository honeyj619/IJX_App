export interface Person {
  id: string
  name: string
  avatar: string
  role: string
  department: string
}

export const MAIN_USER_NAME = '梁吉力'
export const MAIN_USER_AVATAR = 'https://api.dicebear.com/7.x/avataaars/svg?seed=liangjili&backgroundColor=b6e3f4'

export const AVAILABLE_PERSON_NAMES = [
  '王建国', '李娜', '张伟', '刘芳', '陈明', '赵丽', '孙强',
  '刘备', '关羽', '张飞', '诸葛亮', '赵云', '马超', '黄忠',
  '曹操', '司马懿', '夏侯惇', '张辽', '许褚', '徐晃',
  '孙权', '周瑜', '鲁肃', '陆逊', '吕蒙', '甘宁', '太史慈'
]

export const currentUser: Person = {
  id: '1',
  name: '梁吉力',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liangjili&backgroundColor=b6e3f4',
  role: '管理员',
  department: '信息中心'
}

export const peopleList: Person[] = [
  {
    id: '1',
    name: '梁吉力',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liangjili&backgroundColor=b6e3f4',
    role: '管理员',
    department: '信息中心'
  },
  {
    id: '2',
    name: '王建国',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wangjianguo&backgroundColor=c0aede',
    role: '主管',
    department: '综合管理部'
  },
  {
    id: '3',
    name: '李娜',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lina&backgroundColor=ffdfbf',
    role: '职员',
    department: '财务部'
  },
  {
    id: '4',
    name: '张伟',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhangwei&backgroundColor=b8e0d2',
    role: '工程师',
    department: '信息中心'
  },
  {
    id: '5',
    name: '刘芳',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liufang&backgroundColor=e2b8b8',
    role: '专员',
    department: '人事部'
  },
  {
    id: '6',
    name: '陈明',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenming&backgroundColor=d4c5f9',
    role: '经理',
    department: '业务部'
  },
  {
    id: '7',
    name: '赵丽',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhaoli&backgroundColor=ffd3b6',
    role: '助理',
    department: '办公室'
  },
  {
    id: '8',
    name: '孙强',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sunqiang&backgroundColor=c1e1c1',
    role: '技术员',
    department: '信息中心'
  }
]

export function getPersonById(id: string): Person | undefined {
  return peopleList.find(p => p.id === id)
}

export function searchPeople(keyword: string): Person[] {
  return peopleList.filter(p => 
    p.name.includes(keyword) || 
    p.department.includes(keyword)
  )
}

export function getDemoPerson(name: string): Person {
  const found = peopleList.find(p => p.name === name)
  if (found) return found
  return {
    id: 'demo-' + name,
    name,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4`,
    role: '职员',
    department: '未分配'
  }
}

export function getInitialsAvatar(name: string): string {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=ffdfbf`
}