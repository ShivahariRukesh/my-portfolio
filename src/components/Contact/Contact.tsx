
import { CiMail, CiPhone, CiMapPin } from 'react-icons/ci';
import { FaLinkedin, FaFacebook, FaGithub, FaArrowRight } from 'react-icons/fa';


function Contact() {

    const contactItems = [
        {
            icon: CiMail,
            label: 'Email',
            value: '478gnujnoej@gmail.com',
            href: 'mailto:478gnujnoej@gmail.com'
        },
        {
            icon: CiPhone,
            label: 'Phone',
            value: '+977 9863039295',
        },
        {
            icon: CiMapPin,
            label: 'Location',
            value: 'Bhaktapur, Nepal',
            href: null
        }
    ];

    const socials = [
        { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
        { icon: FaGithub, label: 'GitHub', href: '#' },
        { icon: FaFacebook, label: 'Twitter', href: '#' }
    ];

    return (
        <section id="contact" className="min-h-screen bg-neutral-900 py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-light text-neutral-100 mb-4 tracking-tight">
                        Let's Talk
                    </h2>
                    <div className="w-16 h-0.5 bg-neutral-100"></div>
                </div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group cursor-pointer"
                            >
                                <div className="border border-neutral-700 bg-neutral-800 p-8 transition-all duration-300 hover:border-neutral-500 hover:shadow-lg hover:shadow-neutral-950/50">
                                    <Icon
                                        className={`w-6 h-6 mb-6 text-neutral-300 transition-transform duration-300 
                                            }`}
                                    />
                                    <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                                        {item.label}
                                    </h3>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-neutral-100 text-lg hover:text-neutral-300 transition-colors inline-flex items-center gap-2"
                                        >
                                            {item.value}
                                            <FaArrowRight
                                                className={`w-4 h-4 transition-transform duration-300
                                                    }`}
                                            />
                                        </a>
                                    ) : (
                                        <p className="text-neutral-100 text-lg">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200 my-16"></div>

                {/* Social Links */}
                <div>
                    <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-8 font-medium">
                        Connect
                    </h3>
                    <div className="flex gap-6">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="group flex items-center gap-3 text-neutral-900 hover:scale-125 duration-700  transition-transform"
                                >
                                    <div className=" p-3 group-hover:border-neutral-900 transition-all duration-300">
                                        <Icon style={{ fontSize: '28px', color: '#08c' }} />
                                    </div>

                                </a>
                            );
                        })}
                    </div>
                </div>


                <div className="mt-20 pt-12 border-t border-neutral-200">
                    <p className="text-neutral-500 text-sm font-light max-w-md">
                        Open for work, <br />
                        Feel free to reach out if you'd like to work together.
                    </p>
                </div>
            </div>
        </section>
    );
}


export default Contact