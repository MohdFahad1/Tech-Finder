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
            features: [
              "Easy to learn and use, making it ideal for beginners.",
              "Rich ecosystem of libraries for data science and machine learning (e.g., Pandas, NumPy).",
              "Strong community support and extensive documentation.",
              "Supports multiple programming paradigms including procedural, object-oriented, and functional programming.",
            ],
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
            features: [
              "Excellent for statistical analysis and data visualization.",
              "Comprehensive packages for data manipulation (e.g., dplyr, tidyr).",
              "Strong community support with numerous user-contributed packages.",
              "Integrated with various data sources and formats.",
            ],
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
            features: [
              "Access to a vast repository of datasets for experimentation.",
              "Competitions to test and improve your machine learning skills.",
              "Collaborative environment with notebooks for sharing code and insights.",
              "Integration with popular libraries like TensorFlow and PyTorch.",
            ],
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
            features: [
              "State-of-the-art pre-trained models for NLP tasks available in one place.",
              "User-friendly API for easy model deployment and integration.",
              "Active community contributing to model improvements and datasets.",
              "Support for fine-tuning models on custom datasets.",
            ],
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
            features: [
              "Comprehensive set of tools for image processing and computer vision tasks.",
              "Supports multiple languages including Python, C++, and Java.",
              "Real-time capabilities make it suitable for performance-critical applications.",
              "Wide range of algorithms for object detection, face recognition, etc.",
            ],
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
            features: [
              "High-level API that simplifies building deep learning models.",
              "Supports multiple backends including TensorFlow and Theano.",
              "Easy to experiment with different architectures due to its modular design.",
              "Extensive documentation and examples available for users.",
            ],
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
            features: [
              "Scalable architecture that supports distributed training across multiple GPUs.",
              "Rich ecosystem including TensorBoard for visualization and TensorFlow Lite for mobile deployment.",
              "Strong community support with extensive tutorials and resources available.",
              "Integration with Keras allows easy model building.",
            ],
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
            features: [
              "Dynamic computation graph allows for flexible model building during runtime.",
              "Strong support for GPU acceleration to speed up training processes.",
              "Rich ecosystem of libraries like torchvision for computer vision tasks.",
              "Active community contributing to numerous tutorials and research papers.",
            ],
          },
        },
      ],
    },
  ],
};
