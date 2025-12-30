import homebanner from '../assets/img/homebanner.png'
import commonimg from '../assets/img/commonbannerimg.png'
import service2img from '../assets/img/service2bannerimg.png'
import service4img from '../assets/img/service4bannerimg.png'
import service5img from '../assets/img/service5bannerimg.png'
import service2banner1img from '../assets/img/service2banner1.png'


interface BannerData {
  heading: string;
  buttontext: string;
  img: string;
  paragraph?: string; // ✅ optional
}

export const bannercontent: Record<string, BannerData> ={
        home:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: homebanner
    },
    whychoose:{
        heading:"Clear Communication",
        paragraph:"We explain every step, provide transparent estimates, and work with complete honesty to avoid surprises.",
        buttontext:"Book an Appointment",
        img:commonimg,
    },
    service1:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: homebanner,
    },
    service1banner2:{
        heading:"Troubleshooting",
        paragraph:"Electrical problems can be frustrating and sometimes dangerous. Our experts specialize in troubleshooting complex issues, using advanced diagnostic tools to pinpoint the root cause. Whether it’s flickering lights, tripped breakers, or unexpected power loss, we provide clear solutions you can trust.",
        buttontext:"Book an Appointment",
        img:commonimg,
    },
    service2:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: service2img,
    },
    service2banner2:{
        heading:"EV Charger Replacement",
        paragraph:"If your current charger is outdated, damaged, or no longer meets your needs, we offer complete replacement services. We remove old units and install modern, compatible chargers that improve performance and reliability.",
        buttontext:"Book an Appointment",
        img: service2banner1img,
    },
    service3:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: commonimg,
    },
    service4:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: service4img,
    },
    service5:{
        heading:"Ready to start your project",
        buttontext:"Book an Appointment",
        img: service5img,
    },
    Common:{
        heading:"CALL NOW–24/7",
        paragraph:"Your safety is our priority. Don’t wait—contact us immediately for emergency electrical assistance.",
        buttontext:"Book an Appointment",
        img:commonimg,
    },
}