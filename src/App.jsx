import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import GettingStarted from './pages/GettingStarted.jsx'
import Hardware from './pages/Hardware.jsx'
import Software from './pages/Software.jsx'
import OsBasics from './pages/OsBasics.jsx'
import Troubleshooting from './pages/Troubleshooting.jsx'
import TipsTricks from './pages/TipsTricks.jsx'
import NotFound from './pages/NotFound.jsx'
import YourFirstPc from './pages/YourFirstPc.jsx'
import UnderstandingSpecs from './pages/UnderstandingSpecs.jsx'
import BudgetGuide from './pages/BudgetGuide.jsx'
import WhereToBuy from './pages/WhereToBuy.jsx'
import Cpu from './pages/Cpu.jsx'
import Gpu from './pages/Gpu.jsx'
import Ram from './pages/Ram.jsx'
import Storage from './pages/Storage.jsx'
import EssentialApps from './pages/EssentialApps.jsx'
import Browsers from './pages/Browsers.jsx'
import SecuritySoftware from './pages/SecuritySoftware.jsx'
import ProductivityTools from './pages/ProductivityTools.jsx'
import WindowsBasics from './pages/WindowsBasics.jsx'
import FileManagement from './pages/FileManagement.jsx'
import SystemSettings from './pages/SystemSettings.jsx'
import UserAccounts from './pages/UserAccounts.jsx'
import CommonErrors from './pages/CommonErrors.jsx'
import PerformanceIssues from './pages/PerformanceIssues.jsx'
import BootProblems from './pages/BootProblems.jsx'
import NetworkIssues from './pages/NetworkIssues.jsx'
import KeyboardShortcuts from './pages/KeyboardShortcuts.jsx'
import SpeedUpPc from './pages/SpeedUpPc.jsx'
import HiddenFeatures from './pages/HiddenFeatures.jsx'
import MaintenanceSchedule from './pages/MaintenanceSchedule.jsx'

export default function App() {
  return (
    <BrowserRouter basename="/PC-Wiki">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="hardware" element={<Hardware />} />
          <Route path="software" element={<Software />} />
          <Route path="os-basics" element={<OsBasics />} />
          <Route path="troubleshooting" element={<Troubleshooting />} />
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="getting-started/your-first-pc" element={<YourFirstPc />} />
          <Route path="getting-started/understanding-specs" element={<UnderstandingSpecs />} />
          <Route path="getting-started/budget-guide" element={<BudgetGuide />} />
          <Route path="getting-started/where-to-buy" element={<WhereToBuy />} />
          <Route path="hardware/cpu" element={<Cpu />} />
          <Route path="hardware/gpu" element={<Gpu />} />
          <Route path="hardware/ram" element={<Ram />} />
          <Route path="hardware/storage" element={<Storage />} />
          <Route path="software/essential-apps" element={<EssentialApps />} />
          <Route path="software/browsers" element={<Browsers />} />
          <Route path="software/security-software" element={<SecuritySoftware />} />
          <Route path="software/productivity-tools" element={<ProductivityTools />} />
          <Route path="os-basics/windows-basics" element={<WindowsBasics />} />
          <Route path="os-basics/file-management" element={<FileManagement />} />
          <Route path="os-basics/system-settings" element={<SystemSettings />} />
          <Route path="os-basics/user-accounts" element={<UserAccounts />} />
          <Route path="troubleshooting/common-errors" element={<CommonErrors />} />
          <Route path="troubleshooting/performance-issues" element={<PerformanceIssues />} />
          <Route path="troubleshooting/boot-problems" element={<BootProblems />} />
          <Route path="troubleshooting/network-issues" element={<NetworkIssues />} />
          <Route path="tips-tricks/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="tips-tricks/speed-up-pc" element={<SpeedUpPc />} />
          <Route path="tips-tricks/hidden-features" element={<HiddenFeatures />} />
          <Route path="tips-tricks/maintenance-schedule" element={<MaintenanceSchedule />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
