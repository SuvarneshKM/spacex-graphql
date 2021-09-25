import Image from 'next/image';

export default function Launches({ launch }) {
    return (
        <div key={launch.id} class="bg-white rounded-md overflow-hidden relative shadow-md">
            {launch.links.flickr_images.length
                ?
                <div className="p-1">
                    <img class="w-full" src={launch.links.flickr_images} alt="Recipe Title" />
                </div>
                :
                <div className="p-1">
                    <img class="w-full" src="/SpaceX-Logo.svg" alt="Recipe Title" />
                </div>
            }
            <div class="p-4">
                <h2 class="text-2xl text-green-400">{launch.mission_name}</h2>
                <div class="flex justify-center mt-4 mb-4 text-gray-500">
                    <div class="flex items-center">
                        <span>Launch Date : </span>
                        <span class="ml-1 lg:text-xl">{new Date(launch.launch_date_local).toLocaleDateString("en-IN")}</span>
                    </div>
                </div>
                <a href={launch.links.video_link}>
                    <button class="text-white bg-green-400 p-4 rounded-md w-full uppercase">Launch Video</button>
                </a>
            </div>
            <div class="absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                <span>spacex</span>
            </div>
        </div>
    )
}
