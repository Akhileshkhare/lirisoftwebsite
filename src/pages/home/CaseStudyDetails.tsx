import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

export default function CaseStudyDetails() {
  const { id } = useParams();

  return (
    <>
      <section className="w-full py-10 px-4 md:px-0 h-auto">
        {/* Background Div */}
        <div className="w-full h-[480px] mt-[90px] bg-[#F2F5F6] absolute top-0 left-0"></div>
        <div className="w-full max-w-6xl bg-white mx-auto flex flex-col items-center gap-10 md:gap-10 relative pt-10">
  
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full gap-6 px-4 md:px-20">
        
              <div
          
                className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-shadow rounded-xl w-full h-auto"
              >
                {/* Image Part */}
                <div className="w-full h-[200px] md:h-[600px]">
                  <img
                    src={`/backimage4${id}.jpeg`}
                    alt="Feature Icon"
                    className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                {/* Text Part */}
                <div className="text-left p-4 md:p-6 space-y-3">
                  <h3 className="text-gray-900 text-sm md:text-md">
                    <span className="font-bold">
                      {id === '1'
                        ? "23 Sep 2024"
                        : id === '2'
                        ? "17 Sep 2024"
                        : id === '3'
                        ? "15 Aug 2024"
                        : "10 Jul 2024"}
                      ,{" "}
                    </span>
                    {id === '1'
                      ? "by Amanda Hugh"
                      : id === '2'
                      ? "by Sofia Kent"
                      : id === '3'
                      ? "by Jason Bone"
                      : "by Author Name"}
                  </h3>
                  <p className="text-gray-900 text-lg md:text-xl font-semibold">
                    {id === '1'
                      ? "What Makes an Authentic Employee Profile?"
                      : id === '2'
                      ? "Why Does It Matter to be Authentic Employee?"
                      : id === '3'
                      ? "What Makes an Authentic Employee Profile?"
                      : "Case Study Title"}
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    1914 translation by H. Rackham
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  </p>
                  <p className="text-gray-900 text-sm md:text-md">
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                  </p>
                </div>
              </div>
       
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
