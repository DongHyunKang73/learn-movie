"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function Navigation() {
    const path = usePathname();
    return (
        <navi>
            <ul>
                <li>
                    <Link href={"/"}>Home {path === "/" ? "✌️": ""}</Link>
                </li>
                <li>
                    <Link href={"/about-us"}>About {path === "/about-us" ? "✌️" : ""}</Link>
                </li>
            </ul>
        </navi>
    );
}