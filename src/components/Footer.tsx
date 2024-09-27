import { Group, Box } from "@mantine/core";
import Link from "next/link";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Group align="center" justify="space-evenly" h="100%" gap={0}>
        <Link href="/listen" className={classes.link}>
          Listen
        </Link>
        <Link href="/press" className={classes.link}>
          Press
        </Link>
        <Link href="/about" className={classes.link}>
          About
        </Link>
      </Group>
    </footer>
  );
}
