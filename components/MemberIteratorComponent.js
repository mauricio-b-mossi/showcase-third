import React from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import Members from "./Members";

export default function MemberIteratorComponent({members}) {
    return (
      <div className="relative flex flex-col justify-center items-center md:flex-row">
        <AnimateSharedLayout>
          <motion.div layout>
            {members &&
              members.map((member, index) => (
                <Members member={member} key={index} />
              ))}
          </motion.div>
        </AnimateSharedLayout>
      </div>
    );
}
