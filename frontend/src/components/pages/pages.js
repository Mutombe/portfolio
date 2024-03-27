import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/home";
import ProjectDetailsPage from "./project-details/project-details";
import ProfilePage from "./profile/profile";
import ProjectsPage from "./projects-page/projects-page";
import LinksPage from "./links/links";
import ArticlesPage from "./articles/article";
import Git from "./git-metadata/git";
import More from "./more/more";
import Books from "./books/books";
import { Whoops404 } from "./error-page/error-page";

   

function RouteFunction() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/profile"
                    element={<ProfilePage />}
                />
                <Route
                    path="/projects/:id"
                    element={<ProjectDetailsPage />}
                />
                <Route
                    path="/projects"
                    element={<ProjectsPage />}
                />
                <Route
                    path="/social-links"
                    element={<LinksPage />}
                />

                <Route
                    path="/git-metadata"
                    element={<Git />}
                />

                <Route
                    path="/articles"
                    element={<ArticlesPage />}
                />

                <Route
                    path="/more"
                    element={<More />}
                />

                <Route
                    path="/books"
                    element={<Books />}
                />

                <Route path="*" element={<Whoops404 />} />

            </Routes>
        </div>

    );
}

export default RouteFunction;