"use client"
import Head from "next/head";
import React, { FC } from "react";

interface HeadProps {
  meta: {
    [key: string]: any
    title: string;
    description: string;
    type: string
    image?: string;
  }
  org?: string;
}

const HeadMeta: FC<HeadProps> = ({ org = "fitnessKing", meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type"
        content={meta.type} />
      <meta
        property="og:site_name"
        content="an innovative online platform that allows health personnels to simulate and diagnose various health conditions"
      />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${org}`} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" type="/crown-logo.svg" href="/crown-logo.svg" />
      <link rel="icon" href="/crown-logo.svg" sizes="any" />
      <link rel="preload" as="image" href="/crown-logo.svg"></link>
    </Head>
  )
}

export default HeadMeta;
