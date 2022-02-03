import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Content from './Content';


// Component accepts a props object with the following properties:
// - members : the array containing the members of the team
const Members = ({ member }) => {

  // Destructure the member object into its properties
  const {name, position, biography, mainImage} = member
    
  // Set the initial state of the component
  const [isOpen, setIsOpen] = useState(false);

  // Function that sets isOpen to its oposite value
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className="flex flex-col items-center justify-content"
    >
      <motion.div
        layout
        className="relative flex justify-center items-center p-8 md:p-16
        cursor-pointer rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 md:w-52 md:h-52">
            <Image
              className="rounded-full"
              src={mainImage.asset.url}
              alt=""
              width="300"
              height="300"
              priority={true}
            />
          </div>

          {/* When isOpen == true, show the <Content/> component */}
          <AnimatePresence>
            <div className="block md:hidden p-2">
              {isOpen && <Content text={biography} />}
            </div>
          </AnimatePresence>

          <h1 className="font-black pt-3">{name}</h1>
          <h3 className="font-light">{position}</h3>
        </div>

        {/* When isOpen == true, show the <Content/> component */}
        <AnimatePresence>
          <div className="hidden md:block p-8">
            {isOpen && <Content text={biography} />}
          </div>
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};

export default Members;
