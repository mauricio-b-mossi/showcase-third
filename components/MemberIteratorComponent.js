import React from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import Members from "./Members";

// Component accepts a props object with the following properties:
//  - members : the array containing the members of the team
export default function MemberIteratorComponent({members}) {
    return (
      <div className="relative flex flex-col justify-center items-center md:flex-row">
        <AnimateSharedLayout>
          <motion.div layout>

            {/* If there are members, create <Member/> components per each */}
            {members &&
              members.map((member, index) => (
                <Members member={member} key={index} />
              ))}
            
          </motion.div>
        </AnimateSharedLayout>
      </div>
    );
}
