import adobexd_icon from "../../img/skill/adobe-xd-1.svg";
import bootstrap_icon from "../../img/skill/icons8-bootstrap-240.png";
import css_icon from "../../img/skill/css.png";
import figma_icon from "../../img/skill/figma-1.svg";
import gatsby_icon from "../../img/skill/gatsby.svg";
import github from "../../img/skill/github-icon-1.svg";
import graphql_icon from "../../img/skill/graphql.svg";
import html_icon from "../../img/skill/html-5 (1).png";
import java_icon from "../../img/skill/javascript.png";
import mongodb_icon from "../../img/skill/mongodb-icon-1.svg";
import mysql_icon from "../../img/skill/icons8-mysql-logo-240.png";
import nextjs_icon from "../../img/skill/nextjs-3.svg";
import nodejs_icon from "../../img/skill/nodejs-1.svg";
import python_icon from "../../img/skill//python-5.svg";
import react_icon from "../../img/skill/physics.png";

export const skilldata = [
    {
        title: "HTML",
        icon: html_icon,
        level: 80,
    },
    {
        title: "CSS3",
        icon: css_icon,
        level: 65,
    },
    {
        title: "JAVASCRIPT",
        icon: java_icon,
        level: 75,
    },
    {
        title: "REACT JS",
        icon: react_icon,
        level: 70,
    },
    {
        title: "PYTHON",
        icon: python_icon,
        level: 50,
    },
];

export const otherskill = [
    {
        skillName: "DATABASE",
        skillitems: [
            {
                skillname: "mongoDB",
                skillicon: mongodb_icon,
            },
            {
                skillname: "MySQL",
                skillicon: mysql_icon,
            },
        ],
    },
    {
        skillName: "FRAMEWORKS",
        skillitems: [
            {
                skillname: "Bootstrap",
                skillicon: bootstrap_icon,
            },
            {
                skillname: "Gastby",
                skillicon: gatsby_icon,
            },
            {
                skillname: "NextJS",
                skillicon: nextjs_icon,
            },
        ],
    },
    {
        skillName: "WEB DESIGN",
        skillitems: [
            {
                skillname: " Adobe XD",
                skillicon: adobexd_icon,
            },
            {
                skillname: "Figma",
                skillicon: figma_icon,
            },
        ],
    },
    {
        skillName: "OTHER TOOLS",
        skillitems: [
            {
                skillname: "NodeJS",
                skillicon: nodejs_icon,
            },
            {
                skillname: "GitHub",
                skillicon: github,
            },
            {
                skillname: "GraphQL",
                skillicon: graphql_icon,
            },
        ],
    },
];
