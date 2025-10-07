import React, { useState, useEffect } from "react";

import { SectionProps } from '../home/Section1';

export const Section5: React.FC<SectionProps> = ({ data }) => {   
  interface TeamMember {
    image: string;
    name: string;
    post: string;
  }

  interface SectionData {
    title: string;
    teamMembers: TeamMember[];
  }

  const sectionData: SectionData = data || { title: "", teamMembers: [] };


  const { title, teamMembers } = sectionData;
  return (
    <section className="w-full px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-10 md:py-20">
        {/* Section Title */}
        <div className="text-left w-full">
          <h1 className="text-3xl font-bold pt-4 text-[#043A53]">{title}</h1>
        </div>

        {/* Team Members Grid */}
        <div className="w-full pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-[300px] m-auto md:w-[280px] h-[220px] flex flex-col items-center justify-center bg-white rounded-md p-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[140px] h-[140px] object-cover rounded-full"
                />
                <p className="text-[18px] font-bold mt-2">{member.name}</p>
                <p className="text-[12px] text-[#6E8FAC]">{member.post}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
