import { useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import CategoryPills from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import VideoGridItem from "./components/VideoGridItem";
import SideBarComponent from "./components/SideBarComponent";
import { SidebarProvider } from "./context/sidebarContext";

function App() {
  const [selectedCategory, setselectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <Header />
        <div
          className="grid grid-cols-[auto,1fr]
      flex-grow-1 overflow-auto"
        >
          <SideBarComponent />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setselectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGridItem
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  postedAt={video.postedAt}
                  duration={video.duration}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
