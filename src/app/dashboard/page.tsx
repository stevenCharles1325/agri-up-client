"use client";

import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NightsStayIcon from '@mui/icons-material/NightsStay';


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CattleIcon from "@/components/Icons/CattleIcon";
import SwineIcon from "@/components/Icons/SwineIcon";
import GoatIcon from "@/components/Icons/GoatIcon";

export default function Dashboard () {
  const router = useRouter();

  return (
    <div className="w-full h-full p-3">
      {/* WEATHER */}
      <Card sx={{ display: 'flex', height: '150px', justifyContent: 'space-around', alignItems: 'center' }}>
        <div className="flex justify-evenly items-center w-[50%]">
          <WbSunnyIcon sx={{ height: 50, width: 50 }}/>
          <Typography variant="h4" fontWeight="bold">
            36 C
            <Typography variant="h5">
              Sunny
            </Typography>
          </Typography>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CardContent>
          <h4>
            Sample
          </h4>
        </CardContent>
      </Card>

      {/* TASK */}
      <Box 
        sx={{ 
          width: '100%', 
          margin: '20px 0 20px 0', 
          borderRadius: '5px'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%', 
            backgroundColor: 'gray',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <Typography variant="h5">
            {`Today's Tasks`}
          </Typography>

          <Typography variant="h5">
            { new Date().toLocaleDateString() }
          </Typography>
        </Box>

        <Box sx={{ overflow: 'auto' }}>
          <div className="w-fit flex">
            <Card sx={{ height: 100, width: 100, margin: '0 10px 0 10px' }}>
              Sample
            </Card>
            <Card sx={{ height: 100, width: 100, margin: '0 10px 0 10px' }}>
              Sample
            </Card>
            <Card sx={{ height: 100, width: 100, margin: '0 10px 0 10px' }}>
              Sample
            </Card>
            <Card sx={{ height: 100, width: 100, margin: '0 10px 0 10px' }}>
              Sample
            </Card>
            <Card sx={{ height: 100, width: 100, margin: '0 10px 0 10px' }}>
              Sample
            </Card>
          </div>
        </Box>
        <div className="text-right text-black underline italic">
          <Link href="#">View all tasks</Link>
        </div>

        {/* Herds */}
        <div className="w-100 h-fit my-4">
          <Typography variant="h5" color="black" fontWeight="bold" sx={{ marginBottom: "10px" }}>
            Herds
          </Typography>

          <div className="w-full overflow-auto">
            <div className="w-fit flex">
              <Card 
                className="shadow text-center p-3"
                onClick={() => router.push('/herds/cattle')}
                sx={{ height: 200, width: 150, margin: '0 10px 0 10px', backgroundColor: '#503AD4' }}
              >
                <CattleIcon color="white"/>
                <Typography variant="h5" color="white" fontWeight="bold">
                  Cattle
                </Typography>
              </Card>
              <Card 
                className="shadow text-center p-3"
                onClick={() => router.push('/herds/goat')}
                sx={{ height: 200, width: 150, margin: '0 10px 0 10px', backgroundColor: '#734384' }}
              >
                <GoatIcon color="white"/>
                <Typography variant="h5" color="white" fontWeight="bold">
                  Goat
                </Typography>
              </Card>
              <Card 
                className="shadow text-center p-3"
                onClick={() => router.push('/herds/swine')}
                sx={{ height: 200, width: 150, margin: '0 10px 0 10px', backgroundColor: '#F4446E' }}
              >
                <SwineIcon color="white"/>
                <Typography variant="h5" color="white" fontWeight="bold">
                  Swine
                </Typography>
              </Card>
            </div>
          </div>
        </div>

        <div className="w-100 h-fit my-4 mb-[20px]">
          <Typography variant="h5" color="black" fontWeight="bold">
            Tools
          </Typography>

          <div className="w-full flex flex-wrap">
            <Card sx={{ height: 200, width: 150, margin: '5px' }}>
              Cattle
            </Card>
            <Card sx={{ height: 200, width: 150, margin: '5px' }}>
              Swine
            </Card>
            <Card sx={{ height: 200, width: 150, margin: '5px' }}>
              Goat
            </Card>
            <Card sx={{ height: 200, width: 150, margin: '5px' }}>
              Goat
            </Card>
          </div>
        </div>
      </Box>
    </div>
  )
}