import { Badge, Box, Flex, Link, Text } from "@radix-ui/themes";
import ArrowIcon from "./icons/ArrowIcon";
import GithubIcon from "./icons/GithubIcon";

import "./Project.css";

export default function Project({ project }) {
    let technologies = project.technologies.map((tech, index) => <Badge radius="full" key={index}>{tech}</Badge>);

    return (
        <Flex className="project" direction={{ initial: "column-reverse", xs: "row" }} gap="4" align="center" p="2" mx="4">
            <img
                src={project.img}
                alt={project.img_alt}
                style={{
                    borderRadius: 'var(--radius-2)',
                    height: '5rem'
                }} />
            <Flex direction="column" gap="2" >
                <Box>
                    <Link href={project.link} target="_blank" className="projectlink">
                        <Text size="3" weight="medium">{project.name}</Text> <ArrowIcon className="arrow" />
                    </Link>
                </Box>
                <Text size="2">{project.description}</Text>
                <Flex gap="1" mt="1" wrap="wrap">
                    <Link href={project.github} target="_blank">
                        <GithubIcon />
                    </Link>
                    {technologies}
                </Flex>
            </Flex>
        </Flex>
    );
};