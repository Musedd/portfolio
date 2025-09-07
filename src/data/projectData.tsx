import rrr_img from "../assets/MainMenu.png";
import blog_app_img from "../assets/BlogApp.png";
import portfolio_img from "../assets/PortfolioWebsite.png";

export type projectItem = {
  id: number;
  title: string;
  img: string;
  link: string;
};

export const projects: projectItem[] = [
  {
    id: 1,
    title: "Run Rabbit Run- Monitoring App",
    img: rrr_img,
    link: "https://github.com/Musedd/RunRabbitRun",
  },
  {
    id: 2,
    title: "Full Stack Blog App",
    img: blog_app_img,
    link: "https://github.com/Musedd/blogger",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: portfolio_img,
    link: "/",
  }
];
