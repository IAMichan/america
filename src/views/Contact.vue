<template>
    <section class="dark:bg-gray-900">
        <div class="flex items-center justify-center h-screen">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p class="mb-10 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Wrong information on the site? Want some extra information? Let us know.</p>
                <form @submit.prevent="submitForm" action="#" class="space-y-8">
                    <div>
                        <label for="from" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your emailaddress</label>
                        <input class="mb-2 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="youremail@gmail.com" v-model="from" type="email" id="from" required>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input class="mb-2 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="example: wrong information" v-model="subject" type="text" id="subject" required>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Leave a comment..." v-model="body" id="body" rows="6" required></textarea>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center bg-orange-300 hover:bg-orange-400 text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Send message</button>
                        <span id="message" class="hidden items-center col-span-2 bg-green-100 rounded-md py-2 px-6 text-green-800 text-center font-medium">{{ message }}</span>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Contact',
        data() {
            return {
                from: '',
                subject: '',
                body: '',
                message: '',
            };
        },
        methods: {
            async submitForm() {
                try {
                    const response = await fetch('http://localhost:7106/api/email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            from: this.from,
                            to: 'america@api.test',
                            subject: this.subject,
                            body: this.body,
                        }),
                    });
                    if (response.ok) {
                        console.log('Email sent successfully');
                        this.from = '';
                        this.subject = '';
                        this.body = '';
                        this.message = 'Email sent successfully';
                        // make the span with id="message" visible
                        document.getElementById('message').classList.remove('hidden');

                        setTimeout(() => {
                            this.message = '';
                            document.getElementById('message').classList.add('hidden');
                        }, 3000);
                    } else {
                        console.error('Failed to send email');
                        this.message = 'Failed to send email';

                        setTimeout(() => {
                            this.message = '';
                            document.getElementById('message').classList.add('hidden');
                        }, 3000);
                    }
                } catch (error) {
                    console.error('Error sending email:', error);
                }
            },
        },
    };
</script>