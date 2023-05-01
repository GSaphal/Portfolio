import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa"

function App() {
  return (
    <div className="mx-4">
      <div className="container flex  items-center justify-between my-4 md:my-8 ">
        <div className="font__major">Saphal</div>
        <a href="https://medium.com/@gsaphal" target="_blank" rel="noreferrer">
          <div className="underline">Blogs</div>
        </a>
      </div>
      <div className="container flex  flex-col items-center">
        <div className="w-24 h-24 md:h-44 md:w-44 rounded-full overflow-hidden mb-5  mx-auto">
          <img
            className="w-full h-full object-cover"
            src="https://media.licdn.com/dms/image/C5603AQEkQvx5pB6rsQ/profile-displayphoto-shrink_800_800/0/1662222408205?e=1688601600&v=beta&t=K_W2fwkHPG9ZWLYhe48DPMaBI_4l3JO_0c7CfjDyqdU"
            alt="profile_image"
          />
        </div>
        <h1 className="text-sm md:text-md lg:text-lg">Hey there 👋</h1>
        <h1 className="text-sm pt-3 md:text-md lg:text-lg">
          I am <b>Saphal Ghimire</b>, a software engineer based on Nepal.
        </h1>
        <div className="text-sm pt-3 md:text-md lg:text-lg flex items-center gap-x-1">
          I am currently working on
          <a href="https://evolv.art" target="_blank" rel="noreferrer">
            <img
              src="/EvolvIcon.png"
              alt="evolv"
              className="w-12 cursor-pointer"
            />
          </a>
          and{" "}
          <a href="https://redchillies.org" target="_blank" rel="noreferrer">
            <img src="/Redc.png" alt="evolv" className="w-8 cursor-pointer" />
          </a>
        </div>
        <h2 className="text-sm gap-x-1 pt-3 md:text-md lg:text-lg text-center">
          I have a strong passion for working in the following areas:
          <div className="flex gap-x-2  my-2 justify-center items-center">
            <img src="/BlockchainIcon.png" alt="evolv" className="w-7" />
            Blockchain
          </div>
          <div className="flex gap-x-2  my-2 justify-center items-center">
            <img src="/AI.png" alt="evolv" className="w-7" />
            Artificial Intelligence
          </div>
          <div className="flex gap-x-2 my-2 justify-center items-center">
            <img
              src="/ApplicationDevelopment.png"
              alt="evolv"
              className="w-7"
            />
            Application Development
          </div>
          <div className="flex gap-x-2 my-2 justify-center items-center">
            <img src="/DataAnalytics.png" alt="evolv" className="w-7" />
            Data Analysis
          </div>
          <div className="flex gap-x-2 my-2 justify-center items-center">
            <img src="/CloudComputing.png" alt="evolv" className="w-7" />
            Cloud Computing
          </div>
        </h2>
        <h4 className="text-sm pt-3 md:text-md lg:text-lg">
          If you would like to get in touch, you can locate me on other online
          platforms listed below.
        </h4>
        <div className="flex gap-x-4 justify-center text-sm pt-3 md:text-md lg:text-lg">
          <a
            href="https://www.linkedin.com/in/saphalghimire"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center gap-x-2 underline ">
              <FaLinkedin />
              <p>Linkedin</p>
            </div>
          </a>
          <a
            href="https://twitter.com/gsaphal_"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center gap-x-2 underline cursor-pointer">
              <FaTwitter />
              <p>Twitter</p>
            </div>
          </a>

          <a
            href="mailto:gsaphal99@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center gap-x-2 underline cursor-pointer">
              <FaGoogle />
              <p>Email</p>
            </div>
          </a>
          <a
            href="https://github.com/GSaphal"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center gap-x-2 underline cursor-pointer">
              <FaGithub />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
