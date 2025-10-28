import type { ExperienceDetailType } from '../../types/experienceDetail'
import './ExperienceCard.css'

const Card = ({ date, companyName, location, position, backgroundImage }: ExperienceDetailType) => {



    return (


        <div className="card-box perspective-distant w-1/2 h-1/5">


            <div
                className="group relative cursor-pointer"
            >
                <div className="animated-border p-0.5 rounded-2xl">


                    <div className="relative bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={backgroundImage}
                                alt={backgroundImage.slice(0, -4)}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute  inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
                        </div>
                        <div className='absolute top-0 right-0 p-5 text-black text-2xl font-extrabold bg-white/30 backdrop-blur-md rounded-b-md'>
                            <div className=''>{date}</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {position}
                            </h3>
                            <p className="text-neutral-400 text-2xl leading-relaxed">
                                {companyName + ', ' + location}
                            </p>
                        </div>
                    </div>



                </div>

            </div>
        </div>





    )
}

export default Card