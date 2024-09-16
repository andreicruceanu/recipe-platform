import Container from "@/components/Container";
import img from "../assets/Reteta10.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
} from "@/components/ui";
import { Link } from "react-router-dom";
import BlogImg from "../assets/blog.jpg";

const Blog = () => {
  return (
    <Container className="mt-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-2xl font-bold mt-7">Blog</h2>
      <div className="mt-16 p-6 shadow-2xl drop-shadow-2xl rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="order-2 md:order-1 flex flex-col ">
            <span className="text-xs mb-4">Septembre 19,2022</span>
            <p className="text-3xl font-bold mt-6 w-11/12">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-md mt-4 text-left w-11/12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              fugit saepe commodi voluptatibus minima ipsam ducimus veniam!
              Cumque mollitia earum dolorum similique, velit eius fugiat
              deserunt. Nihil hic quam sequi? Cum ipsa magni, quibusdam libero
              rerum accusantium explicabo impedit dolores? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Assumenda, ducimus. Lorem
              ipsum dolor sit...
            </p>
            <div className="mt-auto">
              <Button className="mt-auto">Read More</Button>
            </div>
          </div>
          <div className="w-12/12 order-1 md:order-2">
            <img src={img} alt="tesst" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-24">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <Link to="/text" key={index}>
            <Card className="h-[400px] hover:shadow-lg">
              <CardContent className="flex flex-col w-full p-0">
                <img
                  src={BlogImg}
                  alt="text"
                  className=" rounded-t-md object-cover w-full h-48"
                />
                <div className="px-3">
                  <span className="text-xs opacity-80">
                    on September 19, 2024
                  </span>
                  <p className="text-xl font-bold my-2">
                    Classic New York-Style Cheesecake Recipe
                  </p>
                  <p className="text-sm text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati repellendus, a corporis at quam aperiam saepe nam
                    quod sit placeat perferendis odio! Veniam minima dolorum
                    delectus laborum corrupti. Obcaecati, natus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* <div className="flex flex-col w-full max-w-lg h-[400px]">
          <Link to="/text">
            <img
              src={BlogImg}
              alt="text"
              className=" rounded-t-lg object-cover w-full h-48"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-2">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg h-[400px] hover:shadow-xl">
          <Link to="/text">
            <img
              src={img1}
              alt="text"
              className=" rounded-t-lg object-cover w-full h-48"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-2">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg h-[400px]">
          <Link to="/text">
            <img
              src={BlogImg}
              alt="text"
              className=" rounded-t-lg object-cover w-full"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-2">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg h-[400px]">
          <Link to="/text">
            <img
              src={BlogImg}
              alt="text"
              className=" rounded-t-lg object-cover w-full"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-2">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg h-[400px]">
          <Link to="/text">
            <img
              src={BlogImg}
              alt="text"
              className=" rounded-t-lg object-cover w-full"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-1">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg h-[400px]">
          <Link to="/text">
            <img
              src={BlogImg}
              alt="text"
              className=" rounded-t-lg object-cover w-full"
            />
          </Link>
          <div className="border-x border-b border-t-0 px-2 h-full">
            <span className="text-xs opacity-80">on September 19, 2024</span>
            <p className="text-xl font-bold my-2">
              Classic New York-Style Cheesecake Recipe
            </p>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati repellendus, a corporis at quam aperiam saepe nam quod
              sit placeat perferendis odio! Veniam minima dolorum delectus
              laborum corrupti. Obcaecati, natus.
            </p>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Blog;
