import {
  HuggingFaceIcon,
  KaggleIcon,
  KerasIcon,
  OpenCVIcon,
  PythonIcon,
  PyTorchIcon,
  TensorFlowIcon,
} from "@/components/icons";
import { RIcon } from "@/components/icons/r";
import { Sparkle } from "lucide-react";

export const categoryData = {
  name: "AI & ML Development",
  description:
    "Building algorithms and models for tasks that require human-like cognition and learning.",
  icon: <Sparkle className="w-6 h-6 text-gray-900" />,
  path: "/browse/ai-ml-development",
  subCategories: [
    {
      name: "Languages",
      path: "languages",
      items: [
        {
          name: "Python",
          slug: "python",
          url: "https://python.org/",
          icon: PythonIcon,
          tags: ["Languages"],
          overview: {
            description:
              "Python is a programming language that lets you work quickly and integrate systems more effectively.",
          },
        },
        {
          name: "R",
          slug: "r",
          url: "https://r-project.org/",
          icon: RIcon,
          tags: ["Languages"],
          overview: {
            description:
              "R is a language and environment for statistical computing and graphics.",
          },
        },
      ],
    },
    {
      name: "Platforms",
      path: "platforms",
      items: [
        {
          name: "Kaggle",
          slug: "kaggle",
          url: "https://kaggle.com/",
          icon: KaggleIcon,
          tags: ["Platform"],
          overview: {
            description:
              "Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.",
          },
        },
        {
          name: "HuggingFace",
          slug: "hugging-face",
          url: "https://huggingface.co/",
          icon: HuggingFaceIcon,
          tags: ["Platform"],
          overview: {
            description:
              "Build better models and generative AI apps on a unified, end-to-end, open source MLOps platform.",
          },
        },
      ],
    },
    {
      name: "Libraries",
      path: "libraries",
      items: [
        {
          name: "OpenCV",
          slug: "opencv",
          url: "https://opencv.org/",
          icon: OpenCVIcon,
          tags: ["Library"],
          overview: {
            description:
              "OpenCV provides a real-time optimized Computer Vision library, tools, and hardware. It also supports model execution for Machine Learning (ML) and Artificial Intelligence (AI).",
          },
        },
        {
          name: "Keras",
          slug: "keras",
          url: "https://keras.io/",
          icon: KerasIcon,
          tags: ["Library"],
          overview: {
            description:
              "Keras is an open-source library that provides a Python interface for artificial neural networks.",
          },
        },
      ],
    },
    {
      name: "Frameworks",
      path: "frameworks",
      items: [
        {
          name: "TensorFlow",
          slug: "tensor-flow",
          url: "https://tensorflow.org/",
          icon: TensorFlowIcon,
          tags: ["Framework"],
          overview: {
            description:
              "An end-to-end open source machine learning platform for everyone. Discover TensorFlow's flexible ecosystem of tools, libraries and community resources.",
          },
        },
        {
          name: "PyTorch",
          slug: "pytorch",
          url: "https://pytorch.org/",
          icon: PyTorchIcon,
          tags: ["Framework"],
          overview: {
            description:
              "PyTorch is a machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing, originally developed by Meta AI and now part of the Linux Foundation umbrella.",
          },
        },
      ],
    },
  ],
};
