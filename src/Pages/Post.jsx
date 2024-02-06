import React, { useEffect } from "react";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";
import PostSection from "../components/PostSection";

function Post() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <NavbarSection />
      <PostSection />
      <FooterSection />
    </div>
  );
}

export default Post;
