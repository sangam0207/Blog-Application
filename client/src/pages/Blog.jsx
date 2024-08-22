import { useParams } from 'react-router-dom';
import { getPostById } from '../services/user.api';
import useQuery from '../hooks/useQuery';
import PageLoader from '../components/layouts/PageLoader';

const Blog = () => {
  const { postId } = useParams();

  const { data, isLoading, isError, error } = useQuery(() => getPostById(postId));

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-xl">Error: {error.message}</p>
      </div>
    );
  }

  const { title, content, image, user, createdAt } = data.data.post;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-[1rem]">
        <img className="w-full h-96 object-cover" src={image} alt={title} />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
          <p className="text-gray-700 mb-6 text-lg">{content}</p>
          <div className="flex items-center">
            <img
              className="w-14 h-14 rounded-full mr-4 border-2 border-gray-300 object-cover"
              src={user.profileImage || 'https://via.placeholder.com/150'}
              alt={user.name}
            />
            <div className="text-sm">
              <p className="text-gray-900 font-semibold">{user.name}</p>
              <p className="text-gray-600">{`Posted on ${new Date(createdAt).toLocaleDateString()}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
