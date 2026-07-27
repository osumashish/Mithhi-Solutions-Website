import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Jobs } from './pages/Jobs'
import { JobDetail } from './pages/JobDetail'
import { Apply } from './pages/Apply'
import { Companies } from './pages/Companies'
import { About } from './pages/About'
import { PostAJob } from './pages/PostAJob'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:slug" element={<JobDetail />} />
        <Route path="jobs/:slug/apply" element={<Apply />} />
        <Route path="companies" element={<Companies />} />
        <Route path="about" element={<About />} />
        <Route path="post-a-job" element={<PostAJob />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
