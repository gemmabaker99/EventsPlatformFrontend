import bannerimg from "../assets/banner.jpeg"


function Banner() {
    return (
        
            <div
              className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${bannerimg})`,
              }}
              aria-label="Banner showcasing events for kids"

            >
              <h1 className="text-3xl md:text-5xl font-bold bg-opacity-50 p-4 rounded">
                Best Events for Kids
              </h1>
            </div>
          
        )
  }
  
  export default Banner;
  