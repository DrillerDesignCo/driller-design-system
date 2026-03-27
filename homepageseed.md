<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "on-tertiary-fixed-variant": "#394d00",
                "on-primary-fixed": "#002019",
                "surface": "#f3faff",
                "on-surface": "#071e27",
                "primary": "#05261f",
                "on-tertiary-fixed": "#151f00",
                "error": "#ba1a1a",
                "error-container": "#ffdad6",
                "on-tertiary": "#ffffff",
                "on-surface-variant": "#414846",
                "on-secondary-fixed-variant": "#004c6e",
                "surface-variant": "#cfe6f2",
                "on-background": "#071e27",
                "inverse-surface": "#1e333c",
                "on-primary": "#ffffff",
                "inverse-on-surface": "#dff4ff",
                "tertiary-fixed-dim": "#b0d360",
                "on-error": "#ffffff",
                "on-error-container": "#93000a",
                "surface-container-low": "#e6f6ff",
                "on-secondary-container": "#004666",
                "surface-bright": "#f3faff",
                "surface-container-lowest": "#ffffff",
                "outline": "#717975",
                "surface-container": "#dbf1fe",
                "primary-container": "#1d3c34",
                "primary-fixed": "#c7eade",
                "on-tertiary-container": "#8aab3d",
                "surface-tint": "#45655b",
                "secondary-fixed": "#c9e6ff",
                "on-primary-fixed-variant": "#2e4d44",
                "secondary-container": "#39b8fd",
                "inverse-primary": "#accec2",
                "tertiary-fixed": "#ccf078",
                "background": "#f3faff",
                "tertiary": "#1a2500",
                "tertiary-container": "#2b3c00",
                "primary-fixed-dim": "#accec2",
                "outline-variant": "#c1c8c4",
                "on-primary-container": "#85a69c",
                "on-secondary": "#ffffff",
                "secondary": "#006591",
                "on-secondary-fixed": "#001e2f",
                "surface-dim": "#c7dde9",
                "surface-container-highest": "#cfe6f2",
                "surface-container-high": "#d5ecf8",
                "secondary-fixed-dim": "#89ceff"
              },
              fontFamily: {
                "headline": ["Inter"],
                "body": ["Inter"],
                "label": ["Inter"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
</head>
<body class="bg-surface text-on-surface antialiased">
<!-- TopNavBar Navigation -->
<nav class="fixed top-0 w-full z-50 bg-emerald-50/70 dark:bg-emerald-950/70 backdrop-blur-xl">
<div class="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-screen-2xl mx-auto">
<div class="text-2xl font-black tracking-tighter text-emerald-950 dark:text-white">WasteFalcon</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-emerald-950 dark:text-emerald-400 font-bold border-b-2 border-emerald-900 dark:border-emerald-400 pb-1 font-inter tracking-tight leading-none hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300" href="#">Services</a>
<a class="text-emerald-800/80 dark:text-emerald-200/80 font-inter tracking-tight leading-none hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300" href="#">Commercial</a>
<a class="text-emerald-800/80 dark:text-emerald-200/80 font-inter tracking-tight leading-none hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300" href="#">Residential</a>
<a class="text-emerald-800/80 dark:text-emerald-200/80 font-inter tracking-tight leading-none hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300" href="#">Sustainability</a>
<a class="text-emerald-800/80 dark:text-emerald-200/80 font-inter tracking-tight leading-none hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300" href="#">Impact</a>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-emerald-900 cursor-pointer">language</span>
<span class="material-symbols-outlined text-emerald-900 cursor-pointer">account_circle</span>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium scale-98 active:opacity-80 transition-transform shadow-lg shadow-primary/10">Get a Quote</button>
</div>
</div>
</nav>
<main>
<!-- Hero Section: Intentional Asymmetry -->
<section class="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
<div class="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
<div class="w-full md:w-3/5 z-10">
<span class="text-xs uppercase tracking-widest font-semibold text-secondary mb-4 block">Precision Ecology in Motion</span>
<h1 class="text-5xl md:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] mb-8">
                        The Architecture <br/> of <span class="text-secondary">Smart Waste</span>.
                    </h1>
<p class="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                        WasteFalcon redefines resource management through clinical precision and environmental stewardship. Modern solutions for an evolving planet.
                    </p>
<div class="flex flex-wrap gap-4">
<button class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">Get a Custom Quote</button>
<button class="bg-surface-container-high text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">View Impact Reports</button>
</div>
</div>
<div class="w-full md:w-2/5 relative">
<div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
<img class="w-full h-full object-cover" data-alt="Modern architectural building featuring sustainable green walls and glass panels under a clear blue sky, emphasizing precision and eco-design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdPXalIPcEUQpLF1eKIoaed-m1haMaSj07Yz_QaYV3LRbP9ulsjSuMPDAWb5ML-TYOGvq9aojulvdBBdlLoB3JN-xpeE9Wu65mybCXgjcmBykT-9HuoMmdVaBmeqUg8zuH6IBfWlCwdRMVMQlNfVIzxLWwoFeBBYUvF90L0AW21ZBKwZfJ562mCMSPR1vjWHQ-5WJnnZSBU42VnmMiihjLRT3H6oKZQ9qSNOzD0eKHpOll6SjBYLFOT58yAym1YBmeleuyxR88Kw"/>
</div>
<div class="absolute -bottom-6 -left-6 bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-2xl shadow-xl max-w-[200px]">
<div class="text-3xl font-black mb-1">94%</div>
<div class="text-xs font-bold uppercase tracking-wider opacity-80">Resource Recovery Rate</div>
</div>
</div>
</div>
<!-- Decorative Background Element -->
<div class="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low opacity-50 skew-x-12 translate-x-24"></div>
</section>
<!-- Services: Bento Grid Layout -->
<section class="py-24 bg-surface-container-low">
<div class="max-w-screen-2xl mx-auto px-6 md:px-12">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">High-Fidelity Resource Management</h2>
<p class="text-on-surface-variant text-lg">We move beyond industrial waste to treat every material as a valuable asset in the circular economy.</p>
</div>
<a class="text-primary font-bold flex items-center gap-2 group" href="#">
                        Explore all services
                        <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Commercial Card -->
<div class="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow">
<div class="md:w-1/2">
<span class="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Sector 01</span>
<h3 class="text-2xl font-bold text-primary mb-4">Enterprise Commercial</h3>
<p class="text-on-surface-variant mb-8 leading-relaxed">Scalable ecological logistics for skyscrapers, campuses, and industrial hubs. Precision-timed pickups with real-time data tracking.</p>
<ul class="space-y-4 mb-8">
<li class="flex items-center gap-3 text-sm font-medium">
<span class="material-symbols-outlined text-tertiary-container" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                    Custom Compaction Solutions
                                </li>
<li class="flex items-center gap-3 text-sm font-medium">
<span class="material-symbols-outlined text-tertiary-container" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                    Hazardous Material Protocol
                                </li>
</ul>
<button class="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm">Commercial Quote</button>
</div>
<div class="md:w-1/2 rounded-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up of a glass skyscraper reflecting a clean blue sky, illustrating high-end commercial waste management environments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4JzKzS3Q6NSns-tqlLM6qi-PHmp8aw9EqZO9tzNjiJrJcEyfN3NAMm3HyeeRIFDldhlMmTOrrNgaGULAP9h6fmsXFejbTCISrFjwF6dpWZnnfCoAssBj6gKFidRk_TXUxPoNM1t7LOrNC2RSOn5uZPipuKJ4MK7secx2sVwHHbsMR84sbWw-sEtFg6AA2dRS-SX8uoRXoHoS6N8ElVk7gRWA7DqxUcoNoZ6k7WwlaEv84q_lBYa1ue5mKJ94n5mmB1LtMZgqyOOU"/>
</div>
</div>
<!-- Sustainability Card -->
<div class="md:col-span-4 bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-between shadow-xl">
<div>
<span class="text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-4 block">Technical Details</span>
<h3 class="text-2xl font-bold mb-4">Precision Audit</h3>
<p class="opacity-80 text-sm leading-relaxed mb-6">Our AI-driven analysis provides granular reports on your facility's environmental footprint.</p>
</div>
<div class="space-y-6">
<div class="h-1 bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim w-[82%]"></div>
</div>
<div class="flex justify-between text-xs font-bold">
<span>WASTE REDUCTION TARGET</span>
<span>82% REACHED</span>
</div>
<button class="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors">Request Audit</button>
</div>
</div>
<!-- Residential Card -->
<div class="md:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-10 flex flex-col justify-between">
<div>
<span class="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 block">Sector 02</span>
<h3 class="text-2xl font-bold mb-4">Curated Residential</h3>
<p class="text-sm opacity-80 leading-relaxed">Silent, efficient, and reliable collections for modern living communities.</p>
</div>
<div class="mt-8 rounded-lg overflow-hidden aspect-video">
<img class="w-full h-full object-cover" data-alt="Minimalist modern house exterior with clean lines and a small landscaped garden, representing premium residential services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObkY1CF5oKg-Qci0Acll2h3ApD9Sj7oVs-E9Bjc29xlg_cvb5NKOPscv12ejicNb0Qin6zP0ajenNWPjXPQysLhKSLQomsoEe0g6h-sJK4IIk8c5UfOA2JNTBh6jwOz1Gthcs5qwecAa8EWa33G_m4tgv1WX6NpQqvbfc4245Xj34OHMTkTCX3U4PdYf7V1b9z4szwiWmi4-eg4TvQm8jffVxWBxcrz6TrQNtt1HhPJPg5_K6J4KFRB1dR1v_MIAa8t6HsCn3fZg"/>
</div>
</div>
<!-- Impact Card -->
<div class="md:col-span-8 bg-surface-container-highest rounded-xl p-10 flex flex-col md:flex-row gap-8">
<div class="md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
<h3 class="text-2xl font-bold text-primary mb-4">Sustainability Reporting</h3>
<p class="text-on-surface-variant mb-6 text-sm">Transparency is the core of our operation. Access live dashboards showcasing your diversion rates and carbon offset metrics.</p>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-surface rounded-lg">
<div class="text-xl font-black text-primary">12.4k</div>
<div class="text-[10px] uppercase font-bold text-on-surface-variant">Tons Diverted</div>
</div>
<div class="p-4 bg-surface rounded-lg">
<div class="text-xl font-black text-primary">3.2k</div>
<div class="text-[10px] uppercase font-bold text-on-surface-variant">Metric CO2 Offset</div>
</div>
</div>
</div>
<div class="md:w-1/2 order-1 md:order-2 rounded-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Lush green forest canopy from above, representing the environmental impact and carbon offset of sustainable waste management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9VoJZHVT6HlszKHy6c7cnpTJ1HC-NcicYQH6KC1g9BGUdhe3__5b1RA-bYqC31aOMC71S1n2V31w4FOu1hvIvTJkmSjU5WxLFO1uAE6XyaFPA9gkVPMUVbWp6UQpJRsnV9giC_CWxIYiTo85pnz_ObN1S2qMYrYtJNGmm8GmcGmOsxi-qnLyrgLptGGHbul8Kh4Ct4kQobg7Io1cOGHX-1eoPvmb_njudU29HIaM2fouw6VYkjWRRAZggOUaapH14wiVa9NaW08I"/>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonials: High-End Editorial Style -->
<section class="py-24 bg-surface">
<div class="max-w-screen-2xl mx-auto px-6 md:px-12">
<div class="flex flex-col items-center text-center mb-20">
<span class="text-xs uppercase tracking-[0.2em] font-black text-tertiary mb-4">Global Validation</span>
<h2 class="text-4xl md:text-5xl font-bold text-primary max-w-3xl">Trusted by the Architects of Modern Infrastructure</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="relative">
<span class="material-symbols-outlined text-6xl text-surface-variant absolute -top-10 -left-6 -z-10">format_quote</span>
<p class="text-xl font-medium text-on-surface leading-relaxed mb-8">"WasteFalcon transformed our LEED-certified campus operations. Their data-first approach provides the level of detail our stakeholders demand."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-surface-dim overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a corporate executive in a suit, looking confident and smiling slightly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuzmlE8ql1hnv4fjoAzLtUKYtJM4aSDUl1PS8Ne3zms4eG8XtYdoYVVD66oVNSwDAdxUnT5Y_5IxZJYB00e32hd3xsR6sReM4gh3lF_IomuOYSzkNXTDx5EMDuhxin7fTAkk5zINhDLaT-KqgcO6CCWcdHd5EKWFf3xN6GhnJTAGGriqnJ8WfQNPXMuyOLgYcMPBgsNc705M9Hd70_Wx9E6oSKue8CeJUYjcE9bhPFM91stp3Tott_TkgML_MQcFsJG4n4B_V9gFY"/>
</div>
<div>
<div class="font-bold text-primary">Marcus Thorne</div>
<div class="text-xs uppercase font-bold opacity-60">Director of Operations, Zenith Corp</div>
</div>
</div>
</div>
<div class="relative">
<span class="material-symbols-outlined text-6xl text-surface-variant absolute -top-10 -left-6 -z-10">format_quote</span>
<p class="text-xl font-medium text-on-surface leading-relaxed mb-8">"The precision of their logistics is unmatched. In three years of service, they haven't missed a single architectural window for collection."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-surface-dim overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of a female professional with a warm smile, set against a neutral studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4-CriTfaHTXrHDkj824Fef9HzDNDUNlvB2qSTFe_f9uZLWGHQpnrqpYPO71gr-izL8RmloPgph3Yqh8Vo4Bj9ItEWhE_5-BnBPUrPBSFierK-V1ivTUA_LRNQnhBiEsBrjJrHIuOddL_d2mLRxN-zJvHKKBMTFEXzDLyqNdzhIaCFbKjDjosQeT6leg6wXRGdH-MH6OK6c9DttAVAF-Rj4P_Leg8DYUFdu-Qy8R_-zvyx9zzXoHAclDpDDek1eeBOa3abrKmpgw"/>
</div>
<div>
<div class="font-bold text-primary">Elena Rodriguez</div>
<div class="text-xs uppercase font-bold opacity-60">Sustainability Lead, Urban Green</div>
</div>
</div>
</div>
<div class="relative">
<span class="material-symbols-outlined text-6xl text-surface-variant absolute -top-10 -left-6 -z-10">format_quote</span>
<p class="text-xl font-medium text-on-surface leading-relaxed mb-8">"Beyond just waste removal, WasteFalcon acts as a strategic partner in our carbon neutrality journey. Their reporting is exceptional."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-surface-dim overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of a male architect in a creative studio environment with soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPZVkNt6CavIDJxuCdS_-G2bFM3QT064-n5dyS-hFTBSHxKMz0KiHi4v9Jx4MxTBkvWkD0e_--YuNhlRZqyEt1Ut71T_YM8alX0fa6jR0EADoTdBu2Bx5G2mNVgBhpZkc09ny-PArcdkaDEI7qgeuFoqkcliQSuwTergVFQ5EzOuFtjDc0NbTvrQKUS_CTJ_x1UArwkn5IUlPvoXDZgo6tR1V1e9g8qn62s1rXF8qHgBieT8iQFdjZK9fNtGCuyzIi3-7Kxmcpis0"/>
</div>
<div>
<div class="font-bold text-primary">David Chen</div>
<div class="text-xs uppercase font-bold opacity-60">Chief Architect, SkyPoint Design</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Form Section: Clean Architecture -->
<section class="py-24 bg-surface-container-highest">
<div class="max-w-screen-2xl mx-auto px-6 md:px-12">
<div class="bg-primary rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
<div class="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
<h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready for <br/> Precision Ecology?</h2>
<p class="text-white/70 text-lg mb-10 max-w-md">Schedule a consultation with our resource experts and receive a tailored management blueprint within 24 hours.</p>
<div class="flex items-center gap-6">
<div class="flex -space-x-3">
<div class="w-10 h-10 rounded-full border-2 border-primary bg-surface overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of a female service representative smiling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEm3WOe1R9Xo_yTK_NTrap470nRdBwdVf4TNlh-QuBdXWxj5lmgP51MPTFtN5ZW3ZRvxSkCkKz34MIRs2ILDUwU3N4zghYFo0G2cB3bNc0Vl9r32wZH9uVNalKLzdErCaiTZqkuUsoneaRiBQ9AbIgaoBFkhNnLw65WdGNJRs3B5lM2ELxYLG1TNiyAp8O4Tz85lGMhs14sJJ0_ai1a4hklAHCJ1YvJqTuapW79-6MBGhA447vt7rrQx5CNRzj4JJxKSVMOHzYzWE"/>
</div>
<div class="w-10 h-10 rounded-full border-2 border-primary bg-surface overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of a male logistics expert." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARKkkj9fi61dR6xyxd4MWlAQ9IoQQeNhVbT5OImOlwoCIFBvvpaKhb0_vkdAJQwpi7N6vf-cxKFPa9Cu2oU6o7ccrnutQ_Fdbe7nokrHLLERraYUzdcR44Jme_6EQvjDKTzc-VUTBwyIDrOsqXgna1WKIGZzVnI_U5Vp3uKikp4ofD7PtrM5Vack43rbSDdf06w_OP5qQuxXo7MnTBc1XovuM8Lq4Ol_s47-PmjXmf71l_Kr2-gJlYiiiV-2zeiTAisn5gOcgH8o8"/>
</div>
<div class="w-10 h-10 rounded-full border-2 border-primary bg-surface flex items-center justify-center text-[10px] font-bold text-primary">
                                    +12
                                </div>
</div>
<span class="text-white/60 text-sm font-medium">Experts standing by for your audit</span>
</div>
</div>
<div class="lg:w-1/2 bg-white/5 backdrop-blur-sm p-12 md:p-20">
<form class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-white/50 tracking-widest">Full Name</label>
<input class="w-full bg-white/10 border-none rounded-xl p-4 text-white placeholder:text-white/30 focus:ring-2 focus:ring-secondary outline-none" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-white/50 tracking-widest">Company</label>
<input class="w-full bg-white/10 border-none rounded-xl p-4 text-white placeholder:text-white/30 focus:ring-2 focus:ring-secondary outline-none" placeholder="Falcon Labs" type="text"/>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-white/50 tracking-widest">Service Interest</label>
<select class="w-full bg-white/10 border-none rounded-xl p-4 text-white appearance-none focus:ring-2 focus:ring-secondary outline-none">
<option class="text-primary">Commercial Management</option>
<option class="text-primary">Residential Collection</option>
<option class="text-primary">Sustainability Audit</option>
</select>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase text-white/50 tracking-widest">Message (Optional)</label>
<textarea class="w-full bg-white/10 border-none rounded-xl p-4 text-white placeholder:text-white/30 focus:ring-2 focus:ring-secondary outline-none" placeholder="Tell us about your facility..." rows="3"></textarea>
</div>
<button class="w-full py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-xl hover:bg-secondary-container transition-colors shadow-xl shadow-black/20">Secure My Quote</button>
</form>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-emerald-950 dark:bg-black">
<div class="flex flex-col md:flex-row justify-between items-center gap-8 px-12 py-16 w-full max-w-screen-2xl mx-auto">
<div class="flex flex-col gap-4 items-center md:items-start">
<div class="text-lg font-bold text-emerald-50">WasteFalcon</div>
<div class="font-inter text-xs uppercase tracking-widest font-medium text-emerald-50 opacity-60">© 2024 WasteFalcon. Precision Ecology in Motion.</div>
</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="font-inter text-xs uppercase tracking-widest font-medium text-emerald-300/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="font-inter text-xs uppercase tracking-widest font-medium text-emerald-300/60 hover:text-white transition-colors" href="#">Terms of Service</a>
<a class="font-inter text-xs uppercase tracking-widest font-medium text-emerald-300/60 hover:text-white transition-colors" href="#">Environmental Impact Report</a>
<a class="font-inter text-xs uppercase tracking-widest font-medium text-emerald-300/60 hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-emerald-50/40 cursor-pointer hover:text-emerald-50">public</span>
<span class="material-symbols-outlined text-emerald-50/40 cursor-pointer hover:text-emerald-50">hub</span>
<span class="material-symbols-outlined text-emerald-50/40 cursor-pointer hover:text-emerald-50">energy_savings_leaf</span>
</div>
</div>
</footer>
</body></html>
