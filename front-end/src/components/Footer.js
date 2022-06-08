const socialLinks = [
    {
        icon: "twitter",
        link: "https://twitter.com/johnnypdev"
    },
    {
        icon: "github",
        link: "https://github.com/Johnnyftb"
    },
    {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/john-pioc/"
    }
];

const Footer = () => {

    return (
        <div className="footer">
            <div className="px-5 pb-5 text-quicksand text-dark d-flex align-items-center w-100">
                <h3 className="mb-0">Follow John on socials: </h3>
                {socialLinks.map(item => (
                    <a href={item.link} className="text-decoration-none text-dark">
                        <i className={`fab fa-${item.icon} fa-2x mx-3`}></i>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;