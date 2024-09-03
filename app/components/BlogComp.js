import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const getBlogs = async () => {
  // const url = new URL(path, API_URL);
  // url.search = strapiQuery;
  try {
    const response = await fetch(
      // url.href,
      `${API_URL}/api/posts?populate[images][fields][0]=name&populate[images][fields][1]=url&pagination[pageSize]=10&pagination[page]=1&status=published&locale[0]=en`
    );
    if (response) {
      const post = await response.json();
      console.log("this is the new data", post);
      return post;
    }
  } catch (error) {
    console.log(error);
  }
};
const BlogComp = async () => {
  const data = await getBlogs();
  //console.log("im here agter geeting data",data);
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <h1 className="text-center mb-5">Blog Posts</h1>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data &&
            data.data.map((post) => {
              return (
                <div class="col">
                  <div class="card shadow-sm">
                <Link href={API_URL +"/posts/"+post.slug}>
                <Image src={API_URL + post.images[0].url} alt ="MyImage"  width={350} height={350}/>
                </Link>
                      <title>{post.title}</title>
                    <div class="card-body">
                      <p class="card-text">{post.description}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small class="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default BlogComp;
