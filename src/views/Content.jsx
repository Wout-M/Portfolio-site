import { Flex, Link, Text } from "@radix-ui/themes";
import Project from "../components/Project";

import "./Content.css";

import { projects } from "../data/data";

export default function Content() {

    return (
        <Flex direction="column" gap='9' py="6">
            <Flex direction="column" gap='4' className="Section" id="About">
                <Text>
                    My journey into software development started at around 12 years old, playing around with Java trying to make mods for Minecraft and creating
                    small projects with an Arduino. I had no clue what I was doing, but I still loved creating stuff and quickly learned the basics this way. This got me
                    into volunteering for  <Link href="https://coderdojo.com" target="_blank" className="url">CoderDojo</Link> and helping other kids with starting their coding journey.
                </Text>
                <Text>
                    Nowadays I'm working as a .NET developer for <Link href="https://build-software.eu" target="_blank" className="url">Build-Software</Link> making
                    both desktop and web applications for managing construction companies. In my free time I create fun side projects like bots & games with .NET or React.
                </Text>
                <Text>
                    When I'm not developing, I'm making custom mechanical keyboards or <Link href="https://github.com/Wout-M/QMK-ADB-to-USB" target="_blank" className="url">reviving vintage ones</Link>, 
                    tinkering around with my 3D-printer or going to the gym. 
                </Text>
            </Flex>
            
            <Flex direction="column" gap="5" className="Section" id="Projects">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </Flex>

        </Flex>
    );
};