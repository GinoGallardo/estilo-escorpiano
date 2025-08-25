import {FacebookIcon, InstagramIcon} from "../ui/icons/icons";

const SocialNetwork = () => {
  return (
    <div className="flex text-parraf gap-x-3">
      <a
        href="https://www.instagram.com/estilo.escorpiano?utm_source=ig_web_button_share_sheet&igsh=cXFmbHpuZzU4cHFx"
        target="_blank"
        className="hover:text-primary"
      >
        <InstagramIcon size={30} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61576354743485&mibextid=wwXIfr&rdid=IKA0UfWDKPIOMro8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Lgsgc6iTa%2F%3Fmibextid%3DwwXIfr#"
        target="_blank"
        className="hover:text-primary"
      >
        <FacebookIcon size={30}/>
      </a>
    </div>
  );
};

export default SocialNetwork;
