import { BiLogoYoutube } from "react-icons/bi";

const Footer = props => {
    return (
        <div className="h-[150px] flex items-center justify-center flex-col gap-2">
            <div className="text-lg font-bold text-white">#0xPAVIA</div>
            <div className="flex items-center gap-6">
                <a href="https://discord.com/invite/pavia" target="_blank">
                    <img src="/assets/images/icon-discord.svg" className="w-7" />
                </a>
                <a href="https://twitter.com/Pavs_io" target="_blank">
                    <img src="/assets/images/icon-x.png" className="w-6" />
                </a>
                <a href="https://www.youtube.com/c/paviacorp" target="_blank">
                    <BiLogoYoutube className="text-[35px]" />
                </a>
            </div>
        </div>
    )
}

export default Footer;