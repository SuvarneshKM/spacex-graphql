export default function Launches({ launch }) {
    return (
        <a href={launch.links.video_link} class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <div class="rounded-lg p-4 bg-gray-500 flex flex-col">
                <div>
                    <h5 class="text-white text-2xl font-bold leading-none">
                        {launch.mission_name}
                    </h5>
                    <span class="text-sm text-black leading-none"><span>Launch Time : </span>{ new Date(launch.launch_date_local).toLocaleDateString("en-In")}</span>
                </div>
                <div class="flex items-center justify-center">
                    <div class="text-lg text-white font-light">
                        <span>Rocket Name : </span>{launch.rocket.rocket_name}<span>🚀</span>
                    </div>
                </div>
            </div>
        </a>
    )
}
