import type { ExperienceDetailType } from '../../types/experienceDetail'
import './ExperienceCard.css'

type ExperienceCardProps = ExperienceDetailType & { handlePlayTV: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }
const ExperienceCard = ({ date, companyName, location, position, handlePlayTV }: ExperienceCardProps) => {



    return (


        // <div className="card-box perspective-distant w-1/2 h-1/5">


        //     <div
        //         className="group relative cursor-pointer"
        //     >
        //         <div className="animated-border p-0.5 rounded-2xl">


        //             <div className="relative bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
        //                 <div className="relative h-64 overflow-hidden">
        //                     <img
        //                         src={backgroundImage}
        //                         alt={backgroundImage.slice(0, -4)}
        //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        //                     />
        //                     <div className="absolute  inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
        //                 </div>
        //                 <div className='absolute top-0 right-0 p-5 text-black text-2xl font-extrabold bg-white/30 backdrop-blur-md rounded-b-md'>
        //                     <div className=''>{date}</div>
        //                 </div>
        //                 <div className="p-6">
        //                     <h3 className="text-2xl font-bold text-white mb-2">
        //                         {position}
        //                     </h3>
        //                     <p className="text-neutral-400 text-2xl leading-relaxed">
        //                         {companyName + ', ' + location}
        //                     </p>
        //                 </div>
        //             </div>



        //         </div>

        //     </div>
        // </div>

        <div className='flex'>


            <div className="experience-tape relative w-[600px] h-[380px] border-t-8 rounded-r-2xl border-amber-900"
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handlePlayTV(e)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-black/95 rounded-md shadow-2xl border-2 border-gray-700">

                    <div className="absolute top-4 left-4 right-4 h-28 bg-gradient-to-b from-amber-50 to-amber-500 rounded-sm shadow-md border border-orange-200">
                        {/* <img
                        src={backgroundImage}
                        alt={backgroundImage.slice(0, -4)}
                        className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110"
                    /> */}
                        <div className="p-2">

                            <div className="text-3xl font-bold text-gray-800 mb-1">{companyName}</div>
                            <div className="text-2xl text-gray-600">{location}</div>
                        </div>
                    </div>



                    <div className="absolute top-36 left-4 right-4 h-20 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-sm shadow-inner">
                        <div className="flex items-center justify-between px-8 h-full">

                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 shadow-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    L
                                </div>
                            </div>

                            <div className="flex-1 mx-6 h-10 bg-black rounded-sm border border-gray-800 shadow-inner flex items-center justify-center">
                                <div className="text-green-500 text-lg font-mono tracking-wider opacity-80">{position}</div>
                            </div>

                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 shadow-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">R
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1 left-0 right-0 text-center">
                            <div className="text-white text-xs font-bold tracking-wide">{date}</div>
                        </div>
                    </div>

                    <div className="absolute top-60 left-12 right-12 flex items-center justify-between">

                        <div className="relative">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1 mx-6 h-16 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-sm border-2 border-gray-800 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 border-t-2 border-gray-700"></div>

                </div>


            </div>



            <div className="experience-tv  relative w-[600px] h-[380px] border-t-8 rounded-r-2xl border-amber-900">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-black/95 rounded-md shadow-2xl border-2 border-gray-700">

                    <div className="absolute top-4 left-4 right-4 h-28 bg-gradient-to-b from-amber-50 to-amber-500 rounded-sm shadow-md border border-orange-200">
                        {/* <img
                        src={backgroundImage}
                        alt={backgroundImage.slice(0, -4)}
                        className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110"
                    /> */}
                        <div className="p-2">

                            <div className="text-3xl font-bold text-gray-800 mb-1">{companyName}</div>
                            <div className="text-2xl text-gray-600">{location}</div>
                        </div>
                    </div>



                    <div className="absolute top-36 left-4 right-4 h-20 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-sm shadow-inner">
                        <div className="flex items-center justify-between px-8 h-full">

                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 shadow-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    L
                                </div>
                            </div>

                            <div className="flex-1 mx-6 h-10 bg-black rounded-sm border border-gray-800 shadow-inner flex items-center justify-center">
                                <div className="text-green-500 text-lg font-mono tracking-wider opacity-80">{position}</div>
                            </div>

                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 shadow-xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">R
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1 left-0 right-0 text-center">
                            <div className="text-white text-xs font-bold tracking-wide">{date}</div>
                        </div>
                    </div>

                    <div className="absolute top-60 left-12 right-12 flex items-center justify-between">

                        <div className="relative">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1 mx-6 h-16 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-sm border-2 border-gray-800 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 border-t-2 border-gray-700"></div>

                </div>


            </div>
        </div>


    )
}

export default ExperienceCard