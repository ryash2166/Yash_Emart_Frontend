import React from "react";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog7 from "../assets/blog7.jpg";
import blog9 from "../assets/blog9.jpg";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import Blog from "./Common/Blog";

const BlogOne = () => {
  return (
    <div>
      <section className="bg-[#fbf4f0] pt-[104px] pb-[114px] px-[15px]">
        <div className="mx-[202px] flex items-center max-2xl:mx-[100px] max-xl:mx-[50px] max-lg:mx-0">
          <div className="">
            <section>
              <div>
                <div className="mb-[8px] ">
                  <p className="font-[Jost] font-[500] leading-[3rem] text-[45px] max-md:text-[30px]">
                    Blog Grid View
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div>
                <div className="row">
                  <Blog
                    img={blog3}
                    author={"By Jessica Bryant"}
                    title={"Top 5 Tips For Decor Room"}
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog2}
                    author={"By Leota Jerez"}
                    title={
                      "5 Incredibly Useful Decor Tips For Small Businesses"
                    }
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog3}
                    author={"By Leota Jerez"}
                    title={
                      "How To Find The Right Platns For Your Specific Room"
                    }
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog4}
                    author={"By William Westbrook"}
                    title={"The Psychology Behind Trends: What We Add"}
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog9}
                    author={"By Leota Jerez"}
                    title={
                      "How to Mix & Match Your Plants for Endless Decor Options"
                    }
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog4}
                    author={"By William Westbrook"}
                    title={"10 Must Have Basics For Every Office Closet"}
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog7}
                    author={"By Jessica Bryant"}
                    title={
                      "How To Put Together The Perfect Plants for Any Location"
                    }
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog4}
                    author={"By Leota Jerez"}
                    title={"The Most Flattering Plants For Different Walls"}
                    date={"October 19, 2022"}
                  />
                  <Blog
                    img={blog9}
                    author={"By Leota Jerez"}
                    title={"5 Essential Plants For Every Room"}
                    date={"October 19, 2022"}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Mail />
      <Footer_1 />
    </div>
  );
};

export default BlogOne;
