"use client";

import Header from "@/components/ui/header";
import { Calendar, Hospital, Clock } from "lucide-react";

export default function HospitalManage() {
    return (
        <div>
            <Header />
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <Hospital className="h-20 w-20 text-blue-600" />
                            <Clock className="h-8 w-8 text-purple-500 absolute -bottom-2 -right-2" />
                        </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sistem Manajemen Rumah Sakit
                    </h1>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-600 mb-8">
                        Kami sedang bekerja keras untuk menghadirkan sistem manajemen rumah sakit yang canggih. 
                        Nantikan pembaruan selanjutnya!
                    </p>
                    
                    {/* Launch Date */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">Expected Launch: Q3 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};