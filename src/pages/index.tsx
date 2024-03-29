import { Inter } from 'next/font/google';
import Section from '@/components/Section';
import Card from '@/components/Card';
import withLayout from '@/components/hoc/withLayout';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Head>
        <title>Handcrafted Haven</title>
      </Head>
      <Section>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Handcrafted Haven
          </h1>
          <p className="text-lg text-gray-700">
            Where Creativity Finds a Home!
          </p>
        </div>
      </Section>

      <Section bg="bg-secondary" height="min-h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Discover Unique Treasures
          </h2>
          <p className="text-lg text-gray-700">
            Immerse yourself in a world of creativity and craftsmanship. Explore
            an array of handcrafted items, each telling a unique story and
            created with passion and skill.
          </p>
        </div>
      </Section>

      <Section bg="bg-blue-950">
        <div className="flex flex-wrap justify-center items-center h-full xl:py-10">
          <Card
            className="border-4 border-accent min-h-52"
            title="Shop Sustainably"
            description="At Handcrafted Haven, we believe in the beauty of mindful
          consumption. Support local artisans and choose sustainable,
          one-of-a-kind products that stand the test of time."
          />
          <Card
            className="border-4 border-accent min-h-52"
            title="Community of Crafters"
            description="Join a vibrant community of like-minded individuals who appreciate
          the art of handmade. Engage in discussions, share your insights, and
          be a part of a supportive network that celebrates creativity."
          />
          <Card
            className="border-4 border-accent min-h-52"
            title=" Global Marketplace"
            description="Handcrafted Haven connects
          you with a global marketplace. Discover treasures from artisans
          around the world and be a part of a diverse and rich community."
          />
        </div>
      </Section>

      <Section height="min-h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Artisans, Showcase Your Craft
          </h2>
          <p className="text-lg text-gray-700">
            Are you a creator looking to share your art with the world? Join
            Handcrafted Haven and let your creations shine. Our platform
            provides a virtual stage for you to showcase your talent, connect
            with a global audience, and turn your passion into a thriving
            business.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default withLayout(Home);
