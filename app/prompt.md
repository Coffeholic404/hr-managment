<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Green Beach HR - Employee Directory</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed-variant": "#00522d",
                        "surface-container-high": "#e2eae3",
                        "on-primary-container": "#f6fff4",
                        "tertiary-fixed": "#ece1d4",
                        "primary-fixed-dim": "#7ed99e",
                        "on-tertiary-container": "#fffbff",
                        "error": "#ba1a1a",
                        "inverse-on-surface": "#ebf3ec",
                        "on-secondary-fixed-variant": "#155136",
                        "background": "#f3fbf4",
                        "surface-container-low": "#eef6ef",
                        "on-primary-fixed": "#00210f",
                        "on-background": "#161d19",
                        "tertiary-container": "#7b7369",
                        "inverse-primary": "#7ed99e",
                        "on-error": "#ffffff",
                        "on-surface-variant": "#3f4941",
                        "surface-container-highest": "#dce5de",
                        "on-secondary-fixed": "#002112",
                        "on-surface": "#161d19",
                        "surface-container": "#e8f0e9",
                        "surface-container-lowest": "#ffffff",
                        "secondary-container": "#b3f0cc",
                        "surface-bright": "#f3fbf4",
                        "tertiary": "#625b51",
                        "inverse-surface": "#2a322e",
                        "outline-variant": "#becabe",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "on-error-container": "#93000a",
                        "tertiary-fixed-dim": "#cfc5b9",
                        "on-secondary-container": "#376f52",
                        "secondary-fixed-dim": "#98d4b1",
                        "surface-variant": "#dce5de",
                        "surface": "#f3fbf4",
                        "primary-fixed": "#9af6b8",
                        "secondary": "#30694c",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-tint": "#006d3d",
                        "surface-dim": "#d4dcd5",
                        "primary": "#006a3b",
                        "on-tertiary-fixed": "#201b13",
                        "outline": "#6f7a70",
                        "secondary-fixed": "#b3f0cc",
                        "on-tertiary-fixed-variant": "#4c463c",
                        "primary-container": "#268451"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "card-padding": "24px",
                        "base": "8px",
                        "container-margin-desktop": "40px",
                        "gutter": "24px",
                        "sidebar-width": "280px",
                        "container-margin-mobile": "16px"
                    },
                    "fontFamily": {
                        "headline-md": ["Hanken Grotesk"],
                        "label-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg": ["Hanken Grotesk"],
                        "body-lg": ["Inter"],
                        "title-lg": ["Hanken Grotesk"],
                        "display-lg": ["Hanken Grotesk"],
                        "headline-lg-mobile": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "label-sm": ["11px", {"lineHeight": "14px", "fontWeight": "600"}],
                        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #f3fbf4; /* canvas level 0 */
            color: #161d19;
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .card-shadow {
            box-shadow: 0px 4px 20px rgba(46, 139, 87, 0.1);
        }
        .sidebar-active {
            box-shadow: inset 4px 0 0 0 #006a3b;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f3fbf4;
        }
        ::-webkit-scrollbar-thumb {
            background: #becabe;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #6f7a70;
        }
    </style>
</head>
<body class="flex min-h-screen">
<!-- SideNavBar (Shared Component) -->
<aside class="flex flex-col h-screen w-sidebar-width fixed left-0 top-0 bg-surface-container-lowest dark:bg-inverse-surface border-r border-outline-variant dark:border-outline z-50">
<div class="p-6">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Green Beach HR</h1>
<p class="font-label-md text-label-md text-on-surface-variant opacity-70">Enterprise Admin</p>
</div>
<nav class="flex-1 px-4 space-y-2 mt-4">
<!-- Directory is Active -->
<a class="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold border-r-4 border-primary dark:border-primary-fixed-dim bg-surface-container-low dark:bg-surface-variant rounded-sm transition-all duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-label-md text-label-md">Directory</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant rounded-sm transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span class="font-label-md text-label-md">Assets</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant rounded-sm transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">cloud_upload</span>
<span class="font-label-md text-label-md">Documents</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant rounded-sm transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="p-4 bg-surface-container-low mt-auto">
<button class="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-4 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all card-shadow">
<span class="material-symbols-outlined">add</span>
                New Employee
            </button>
</div>
<div class="px-4 py-6 space-y-2">
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">help</span>
                Support
            </a>
<a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container transition-colors font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-sidebar-width flex-1 flex flex-col min-h-screen relative overflow-x-hidden">
<!-- TopNavBar (Shared Component) -->
<header class="flex justify-between items-center w-full h-16 px-container-margin-desktop bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-40">
<div class="flex items-center gap-8">
<h2 class="font-title-lg text-title-lg text-primary dark:text-primary-fixed-dim font-bold">HR Dashboard</h2>
<div class="hidden md:flex items-center gap-6">
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1" href="#">Directory</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors" href="#">Assets</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors" href="#">Uploads</a>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full text-body-md focus:outline-none focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Search directory..." type="text"/>
</div>
<div class="flex items-center gap-2">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:opacity-80">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:opacity-80">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
<div class="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User Avatar" class="w-full h-full object-cover" data-alt="A professional high-resolution headshot of a female HR executive with a warm, confident smile. She is standing in a brightly lit, modern office with soft green plants and sleek white furniture in the blurred background. The aesthetic is clean, professional, and reflects the Green Beach HR brand's serene and efficient atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS578glbVTHRT1yfrtLiMlWn8pwq4-8Gb5KmMUtKnzBbT0QnADfVNOcHKh4LfWuCngI3s1oRWFXakmUHQ3qaPyUNeutF3XqJPxMO91BPvrfNiOVWujQmWhxD_UTq4pe4pNI7TwEY9fPaMlWbTb9UGQGNj14MX9_6uu5Cj9y3c_ksdz4HkwN4aH2XuFPKixLgn4x1p0z1-5DbRM0WUrs-9HkpuohYDniKf-9ehWch38ESStpER_tcieT9hFKIFZgxsmXeD3ABm7mmo"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-container-margin-desktop max-w-[1440px] mx-auto w-full">
<!-- Welcome Header -->
<div class="flex justify-between items-end mb-8">
<div>
<h3 class="font-headline-lg text-headline-lg text-on-background mb-2">Employee Directory</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant">Manage your global workforce from a centralized hub.</p>
</div>
<div class="flex gap-4">
<button class="flex items-center gap-2 bg-surface-container-lowest border border-outline text-on-surface px-4 py-2.5 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-[20px]">filter_list</span>
                        Filters
                    </button>
<button class="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all card-shadow active:scale-95">
<span class="material-symbols-outlined text-[20px]">person_add</span>
                        Add New Employee
                    </button>
</div>
</div>
<!-- Bento Stats Grid (Atmospheric Context) -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
<div class="bg-surface-container-lowest p-card-padding rounded-xl card-shadow border border-surface-variant">
<p class="font-label-md text-label-md text-tertiary mb-1">Total Employees</p>
<div class="flex items-end gap-2">
<span class="font-display-lg text-display-lg text-primary">1,248</span>
<span class="font-label-sm text-label-sm text-primary bg-secondary-container px-2 py-0.5 rounded-full mb-3">+12%</span>
</div>
</div>
<div class="bg-surface-container-lowest p-card-padding rounded-xl card-shadow border border-surface-variant">
<p class="font-label-md text-label-md text-tertiary mb-1">New Hires (MTH)</p>
<div class="flex items-end gap-2">
<span class="font-display-lg text-display-lg text-secondary">32</span>
<span class="font-label-sm text-label-sm text-secondary bg-surface-container-high px-2 py-0.5 rounded-full mb-3">On Track</span>
</div>
</div>
<div class="bg-surface-container-lowest p-card-padding rounded-xl card-shadow border border-surface-variant md:col-span-2 relative overflow-hidden flex items-center">
<div class="z-10 flex-1">
<p class="font-label-md text-label-md text-tertiary mb-1">Department Spotlight</p>
<h4 class="font-headline-md text-headline-md text-on-background">Product Design</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">Expanding team with 4 open roles.</p>
</div>
<div class="absolute right-[-20px] top-[-20px] opacity-10">
<span class="material-symbols-outlined text-[160px]" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
</div>
</div>
<!-- Employee List Container -->
<div class="bg-surface-container-lowest rounded-xl card-shadow border border-surface-variant overflow-hidden">
<div class="p-6 border-b border-outline-variant bg-surface-bright flex justify-between items-center">
<div class="flex gap-4">
<button class="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md">All Roles</button>
<button class="px-4 py-2 hover:bg-surface-container rounded-full font-label-md text-label-md transition-colors">Engineering</button>
<button class="px-4 py-2 hover:bg-surface-container rounded-full font-label-md text-label-md transition-colors">Marketing</button>
</div>
<div class="flex items-center gap-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">View:</span>
<button class="p-1.5 text-primary bg-surface-container-low rounded"><span class="material-symbols-outlined">format_list_bulleted</span></button>
<button class="p-1.5 text-outline hover:bg-surface-container rounded transition-colors"><span class="material-symbols-outlined">grid_view</span></button>
</div>
</div>
<!-- Data Table -->
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low border-b border-outline-variant">
<tr>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider">Employee</th>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider">Department</th>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider">Status</th>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider">Email</th>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider">Location</th>
<th class="px-6 py-4 font-label-md text-label-md text-tertiary uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Employee Row 1 -->
<tr class="hover:bg-surface-container transition-colors group cursor-pointer">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Alex Rivers" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A portrait of a male software engineer with a professional yet approachable demeanor, set against a blurred high-tech workspace. The lighting is crisp and natural, highlighting a clean, modern aesthetic with subtle green accents in his attire. The overall mood is focused and intelligent, consistent with a high-end corporate identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkN4dig1n6pU5uPOau5dFlAb_7oYRUTY1VFbauuqcMadlpEoaS66q5RunOcXKFdeQsXrRx51umNVwjItJHSA5Na79Mm-pL9HIPOUZ3q1zPKWXjyXoFVSPjMut0kU02-viFiSCm3Lax23ibMOko_vIhTClz1qz1kZ65SaybuMOuJmH-p2IyYoE32YfPsSCjiVm9wwta0UV2qlx2N7rhIB_zK3wlgGfh8FgrzmC4lhBsWFfZDMY-ZVXvlCGDh9gdLFHL6vrrjnndF4s"/>
<div>
<p class="font-label-md text-label-md text-on-surface font-bold">Alex Rivers</p>
<p class="font-body-md text-body-md text-on-surface-variant text-[13px]">Lead Engineer</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="font-body-md text-body-md">Engineering</span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">arivers@greenbeach.hr</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">San Francisco, CA</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-outline hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Employee Row 2 -->
<tr class="hover:bg-surface-container transition-colors group cursor-pointer">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Elena Gomez" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A portrait of a female marketing professional with a bright and energetic expression. She is in a contemporary studio with soft, warm sandy backgrounds that echo a beach-inspired corporate palette. The lighting is high-key and flattering, conveying professional stability and creative energy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3EH1XzTQcukxshAnYrpSXsRn1U1U4OnCRkhLrqrZi5OqudZUtlXcNNOohvKkRhBd2b5iLjzcM8bONzvEJuhHqOu6mggGJqchIipAoYEzsKmZVeyvunOvJUtwwh9sdarVMHj22RQzd9IP96SD6C5aGdDDoyI6mJ7Ciyqz_t8GYRNkPB6_Sxxhmq_nQhAgbVydaFOaXlpRnp88Kiz1JHDHomXSizySspqYYlJy6fyMuW55_UiFgbFgBXjC9hxzibccWKY-ew0Uixlg"/>
<div>
<p class="font-label-md text-label-md text-on-surface font-bold">Elena Gomez</p>
<p class="font-body-md text-body-md text-on-surface-variant text-[13px]">Creative Director</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="font-body-md text-body-md">Marketing</span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">egomez@greenbeach.hr</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Austin, TX</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-outline hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Employee Row 3 -->
<tr class="hover:bg-surface-container transition-colors group cursor-pointer">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Jordan Smith" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional male executive headshot in a bright, airy coastal office. He has a calm, assured expression, perfectly capturing the calculated calm of the Green Beach brand. The scene features minimalist decor, soft green plants, and a palette of warm neutrals and sea greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNpyTJsOb2NfkDHoE_VBHZq1TUWaWp0ZsLY0CFvgiCjXprCHVTznlyegM9yMZsZV8zziWM-_t7OSGeVL8U8_NJd6Bd0ussdUPNLkqJbnSGhW51cGxuZa981Wp5v8dbfnWmxoZtzfjD9tI-mwXe3-cY6cOAtQXCXcK9SAl7k4o09UYkHufiRLU5VwUjJdyodngJUwd_dkBgyl7UC6_3Nb1jW2LHDbdk0XAsLq8vwrSuXwQu-pbwvaECSERbXKq154jvwNKmGD0nSd8"/>
<div>
<p class="font-label-md text-label-md text-on-surface font-bold">Jordan Smith</p>
<p class="font-body-md text-body-md text-on-surface-variant text-[13px]">HR Operations</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="font-body-md text-body-md">Administration</span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">On Leave</span>
</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">jsmith@greenbeach.hr</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">London, UK</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-outline hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Employee Row 4 -->
<tr class="hover:bg-surface-container transition-colors group cursor-pointer">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Maya Patel" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A high-contrast professional portrait of a woman in an enterprise environment. She is smiling warmly, representing the human-centric nature of HR. The background is a sophisticated office with organic textures and a soft focus on greenery, maintaining the Green Beach visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8dn3-NvKxMhxfMeaCbm3yjhVZzY5k1C7QubcYSkYay0Hgmd8TgXErKOtUS5706f5ZIM6zUwPQDqaPE30Z9SG-Yef2gZEQsy7K78HDzRua5AAJZWAbyoAvx1ttaPxLqQf80IsvGz2hgElBVUcnC88V5azSBQc5PWYYKL2hcI2SjRy-vXC2wm37ZWG6IBmequrQeVVEL5F2_wsQ01JPpRhbAp3fLkrsq7WvdeRIQ6HSrRKDilMglPXZ4jbdbyC_gHkbFAdgl6ig-M"/>
<div>
<p class="font-label-md text-label-md text-on-surface font-bold">Maya Patel</p>
<p class="font-body-md text-body-md text-on-surface-variant text-[13px]">Product Designer</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="font-body-md text-body-md">Product</span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Onboarding</span>
</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">mpatel@greenbeach.hr</td>
<td class="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Berlin, GER</td>
<td class="px-6 py-4 text-right">
<button class="p-2 text-outline hover:text-primary transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
<!-- Pagination -->
<div class="px-6 py-4 bg-surface-bright border-t border-outline-variant flex items-center justify-between">
<p class="font-label-md text-label-md text-on-surface-variant">Showing 4 of 1,248 employees</p>
<div class="flex gap-2">
<button class="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-30" disabled="">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="px-3 py-1 bg-primary text-on-primary rounded font-label-md text-label-md">1</button>
<button class="px-3 py-1 hover:bg-surface-container rounded font-label-md text-label-md transition-colors">2</button>
<button class="px-3 py-1 hover:bg-surface-container rounded font-label-md text-label-md transition-colors">3</button>
<button class="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<!-- Floating Action Button (FAB) - Suppression Logic applied where not top-level or specific task -->
<!-- Since this is the Home/Dashboard for Directory, we show a Contextual Add FAB -->
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full card-shadow flex items-center justify-center hover:bg-on-primary-fixed-variant transition-all hover:scale-110 active:scale-95 group">
<span class="material-symbols-outlined text-[28px]">person_add</span>
<span class="absolute right-16 bg-on-background text-on-primary px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Quick Add Employee</span>
</button>
</main>
<script>
        // Simple Interaction: Row Click Emulation
        document.querySelectorAll('tr[cursor-pointer]').forEach(row => {
            row.addEventListener('click', () => {
                const name = row.querySelector('.font-bold').textContent;
                console.log(`Opening profile for: ${name}`);
                // In a real app, this would route to a details page
            });
        });

        // Search Bar Focus Effect
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.classList.add('w-80');
        });
        searchInput.addEventListener('blur', () => {
            if (searchInput.value === '') {
                searchInput.classList.remove('w-80');
            }
        });
    </script>
</body></html>