import Comentarios from "@/components/comentarios";
import Footer from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlechaUp from "@/svg/flechaUp";
import Head from "next/head";

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Nosotros</title>
      </Head>
      <h1
        className="text-center my-7"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "'Cormorant', serif",
        }}
      >
        Nosotros
      </h1>
      <section className="w-full h-auto flex justify-center mb-10">
        <div
          className="w-full h-auto flex flex-wrap justify-center"
          style={{ maxWidth: "1100px" }}
        >
          <img src="img/nosotros/nosotros1.jpg" alt="nosotros1" />

          <Comentarios img={""} color={"#000"} />
          <div
            className="w-full mb-6"
            style={{ height: "1px", backgroundColor: "#6767674d" }}
          ></div>

          <div className="w-full flex flex-col lg:flex-row justify-center">
            <div className="h-auto w-full lg:w-2/5 p-2 flex flex-col items-center">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "'Cormorant', serif",
                }}
              >
                TODAY’S SPECIAL
              </h3>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "'Cormorant', serif",
                }}
              >
                Caffe Americano
              </h4>
              <img src="img/nosotros/nosotros2.jpg" alt="nosotros2" />
            </div>
            <div className="h-auto w-full lg:w-3/5 p-5 lg:p-2">
              <p className="estiloCapital mb-5">
                Be mel dico temporibus, ex mel error utamur nusquam. Usu
                invenire percipitur cotidieque cu. Vis perfecto moderatius
                comprehensam et, blandit lucilius duo an, et euismod placerat
                vis. Eam debitis appareat no, mei justo referrentur an. Noster
                vivendum persecuti ea ius. Scripta constituam quo et. Prima
                decore ocurreret mei ex, meis vitae est ad. Pro id quidam
                aperiam, eu facilisi interpretaris vis, quodsi eleifend qui no.
                Nec in decore offendit referrentur, ut cum admodum temporibus,
                ad vim ridens postulant. Probatus mediocrem neglegentur ut ius,
                ne quo facilisis quaerendum. Eum fierent erroribus theophrastus
                et.
              </p>
              <Acordeon />
              <Acordeon />
              <Acordeon />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const Acordeon = () => {
  const [aco, setAco] = useState(false);

  return (
    <>
      <div className="my-5">
        <div
          className="border-r border-t border-l w-full h-14 cursor-pointer flex justify-around items-center"
          style={{ borderColor: "#6767674d" }}
          onClick={() => setAco(!aco)}
        >
          <span>DISCOVER A HEALTHIER SLICE OF LIFE</span>
          <FlechaUp
            className={`h-7 w-7 ${
              !aco ? "rotate-0" : "rotate-180"
            } transition-all`}
          />
        </div>

        <motion.div
          animate={{
            height: aco ? "135px" : "0px",
          }}
          style={{ borderColor: "#6767674d" }}
          className="border-r border-b border-l w-full h-auto cursor-pointer overflow-hidden flex justify-center items-center"
        >
          <span style={{ width: "90%", height: "80%" }}>
            Novum nominavi instructior eos ne, id invidunt mediocrem mei. Cum
            sint complectitur ad, te vix nibh vocibus consetetur. Has et sale
            civibus recteque, vitae quaestio te nam. Usu no copiosae apeirian.
            Zril bonorum euripidis per et. Ridens lobortis pro at.
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Nosotros;
