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
          // icon: PythonIcon,
        },
        {
          name: "R",
          slug: "r",
          url: "https://r-project.org/",
          // icon: RIcon,
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
          // icon: KaggleIcon,
        },
        {
          name: "HuggingFace",
          slug: "hugging-face",
          url: "https://huggingface.co/",
          // icon: HuggingFaceIcon,
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
          // icon: OpenCVIcon,
        },
        {
          name: "Keras",
          slug: "keras",
          url: "https://keras.io/",
          // icon: KerasIcon,
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
          // icon: TensorFlowIcon,
        },
        {
          name: "PyTorch",
          slug: "pytorch",
          url: "https://pytorch.org/",
          // icon: PyTorchIcon,
        },
      ],
    },
  ],
};
