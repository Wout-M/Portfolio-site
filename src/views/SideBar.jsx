import { useEffect, useState } from "react";
import { Flex, Heading, Link, Text } from "@radix-ui/themes";
import { animateScroll as scroll } from 'react-scroll';

import { links } from "../data/data";

import "./SideBar.css";


export default function SideBar() {
    const [sections, setSections] = useState([["", 0]]);
    const [active, setActive] = useState("");

    const SetActiveSection = () => {
        const sects = Array.from(document.getElementsByClassName("Section")).map(section => section.id);
        const section = sects
            .map(section => document.getElementById(section))
            .reverse()
            .find((element) => window.scrollY > element.offsetTop - 200);

        setSections(sects)
        setActive(section ? section.id : "About");
    };

    const Scroll = (id) => {
        var element = document.getElementById(id);
        scroll.scrollTo(element.offsetTop, { duration: 500, smooth: true });
        SetActiveSection();
    };

    useEffect(() => {
        SetActiveSection();
        window.addEventListener("scroll", SetActiveSection);
        return () => window.removeEventListener("scroll", SetActiveSection);
    }, []);

    return (
        <Flex direction="column" justify="between" py="6" height="100%">
            <Flex direction="column" justify="center" >
                <Heading size="9">Wout Mergaerts</Heading>
                <Text mt="3" size="5">.NET Developer, Web Developer & Tinkerer</Text>
                <Flex direction="column" gap="5" shrink="1" py="3" mt={{ initial: "0", md: "7" }} ml="3">
                    {sections.map(section => (
                        <Text size="5"
                            className={active === section ? "active link" : "link"}
                            color={active === section ? "violet" : "gray"}
                            key={section} asChild>
                            <Link onClick={() => Scroll(section)}>{section}</Link>
                        </Text>
                    ))}
                </Flex>
            </Flex>
            <Flex mt="3" gap="4" wrap="wrap" align="center" >
                {links.map(link => (
                    <Link href={link.url} size="7" target="_blank" key={link.url}>
                        {link.icon}
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
};