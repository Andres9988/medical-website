import { Search, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>公众版</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>员工办公</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-lg">医</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-800">深圳市盐田区人民医院集团</div>
              <div className="text-sm text-gray-600">精准医疗 仁爱创新</div>
            </div>
          </div>

          {/* Search and buttons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="请输入关键字" className="w-64 pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">搜索</Button>
            <Button variant="outline">预约挂号</Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 border-t pt-4">
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="text-blue-600 font-medium">
              首页
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              医院概况
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              就医指南
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              科室介绍
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              医疗服务
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              科学研究
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              学科建设
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              科研成果
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              护理园地
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              健康教育
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              三甲评审
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              医院文化建设
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
