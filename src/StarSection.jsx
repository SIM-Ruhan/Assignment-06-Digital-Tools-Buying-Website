import React from 'react';

const StarSection = () => {
    return (
       

    <div class="w-full bg-linear-to-r from-[#7c3aed] to-[#6d28d9] py-16 px-6">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 text-white">
            
            <div class="flex flex-col items-center text-center">
                <span class="text-5xl font-bold tracking-tight mb-2">50K+</span>
                <span class="text-sm md:text-base opacity-80 font-medium">Active Users</span>
            </div>

            <div class="hidden md:block h-16 w-px bg-white/60"></div>

            <div class="flex flex-col items-center text-center">
                <span class="text-5xl font-bold tracking-tight mb-2">200+</span>
                <span class="text-sm md:text-base opacity-80 font-medium">Premium Tools</span>
            </div>

            <div class="hidden md:block h-16 w-px bg-white/60"></div>

            <div class="flex flex-col items-center text-center">
                <span class="text-5xl font-bold tracking-tight mb-2">4.9</span>
                <span class="text-sm md:text-base opacity-80 font-medium">Rating</span>
            </div>

        </div>
    </div>


    );
};

export default StarSection;