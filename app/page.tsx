// import React from "react";
// import Input from "postcss/lib/input";

// export default function page() {
//   return (
//     <div className=" bg-slate-400 min-h-screen flex flex-col gap-6 text-center">
//       <div className="flex flex-col gap-8 bg-green-600 text-white">
//         <h1 className=" text-5xl font-semibold pt-7">Binary Tree Visualiser</h1>
//         <div className="flex items-center justify-center flex-row gap-10">
//           <button className="text-lg bg-green-900  px-8 py-2 rounded-3xl">
//             Insert
//           </button>
//           <input
//             className=" bg-white text-normal px-6 py-2 rounded-3xl text-black"
//             type="number"
//             name="name"
//             placeholder="Enter Tree Key"
//           />
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             Remove
//           </button>
//         </div>

//         <div className="flex flex-row justify-center gap-10 pb-8 ">
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             In-Order Traversal
//           </button>
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             Pre-Order Traversal
//           </button>
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             Post-Order-Traversal
//           </button>
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             Breadth-First Traversal
//           </button>
//           <button className="text-lg bg-green-900 px-6 py-2 rounded-3xl">
//             Depth-First Traversal
//           </button>
//         </div>
//       </div>
//       <div>
//         <h2>Tree is empty. Try adding a node.</h2>
//       </div>
//     </div>
//   );
// }

"use client";
// import React, { useState } from "react";

// interface TreeNode {
//   value: number;
//   left?: TreeNode | null;
//   right?: TreeNode | null;
// }

// export default function Page() {
//   const [tree, setTree] = useState<TreeNode | null>(null);
//   const [inputValue, setInputValue] = useState<number | null>(null);

//   const handleInsert = () => {
//     if (inputValue === null) return;
//     setTree(insertNode(tree, inputValue));
//     setInputValue(null);
//   };

//   const handleRemove = () => {
//     setTree(null);
//     setInputValue(null);
//   };

//   const insertNode = (root: TreeNode | null, value: number): TreeNode => {
//     if (!root) {
//       return { value };
//     }
//     if (value < root.value) {
//       root.left = insertNode(root.left ?? null, value);
//     } else {
//       root.right = insertNode(root.right ?? null, value);
//     }
//     return root;
//   };

//   const inOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(...inOrderTraversal(node.left ?? null));
//       result.push(node.value);
//       result.push(...inOrderTraversal(node.right ?? null));
//     }
//     return result;
//   };

//   const preOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(node.value);
//       result.push(...preOrderTraversal(node.left ?? null));
//       result.push(...preOrderTraversal(node.right ?? null));
//     }
//     return result;
//   };

//   const postOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(...postOrderTraversal(node.left ?? null));
//       result.push(...postOrderTraversal(node.right ?? null));
//       result.push(node.value);
//     }
//     return result;
//   };

//   const breadthFirstTraversal = (root: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (!root) return result;

//     const queue: TreeNode[] = [root];
//     while (queue.length) {
//       const node = queue.shift()!;
//       result.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return result;
//   };

//   const depthFirstTraversal = (root: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (!root) return result;

//     const stack: TreeNode[] = [root];
//     while (stack.length) {
//       const node = stack.pop()!;
//       result.push(node.value);
//       if (node.right) stack.push(node.right);
//       if (node.left) stack.push(node.left);
//     }
//     return result;
//   };

//   const renderTree = (node: TreeNode | null): JSX.Element => {
//     if (!node) return <></>;
//     return (
//       <>
//         <div className="flex flex-col items-center">
//           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//             {node.value}
//           </div>
//           <div className="flex">
//             {node.left && renderTree(node.left)}
//             {node.right && renderTree(node.right)}
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="bg-slate-400 min-h-screen flex flex-col gap-6 text-center">
//       <div className="flex flex-col gap-8 bg-green-600 text-white">
//         <h1 className="text-5xl font-semibold pt-7">Binary Tree Visualiser</h1>
//         <div className="flex items-center justify-center flex-row gap-10">
//           <button
//             className="text-lg bg-green-900 px-8 py-2 rounded-3xl"
//             onClick={handleInsert}
//           >
//             Insert
//           </button>
//           <input
//             className="bg-white text-normal px-6 py-2 rounded-3xl text-black"
//             type="number"
//             name="name"
//             placeholder="Enter Tree Key"
//             value={inputValue === null ? "" : inputValue}
//             onChange={(e) => setInputValue(parseInt(e.target.value))}
//           />
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handleRemove}
//           >
//             Remove
//           </button>
//         </div>

//         <div className="flex flex-row justify-center gap-10 pb-8">
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={() => console.log(inOrderTraversal(tree))}
//           >
//             In-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={() => console.log(preOrderTraversal(tree))}
//           >
//             Pre-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={() => console.log(postOrderTraversal(tree))}
//           >
//             Post-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={() => console.log(breadthFirstTraversal(tree))}
//           >
//             Breadth-First Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={() => console.log(depthFirstTraversal(tree))}
//           >
//             Depth-First Traversal
//           </button>
//         </div>
//       </div>
//       <div>
//         {tree ? (
//           <div className="flex justify-center mt-8">
//             <div className="relative">{renderTree(tree)}</div>
//           </div>
//         ) : (
//           <h2>Tree is empty. Try adding a node.</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------------

// import React, { useState } from "react";

// interface TreeNode {
//   value: number;
//   left?: TreeNode | null;
//   right?: TreeNode | null;
// }

// export default function Page() {
//   const [tree, setTree] = useState<TreeNode | null>(null);
//   const [inputValue, setInputValue] = useState<number | null>(null);
//   const [traversalResult, setTraversalResult] = useState<number[]>([]);

//   const handleInsert = () => {
//     if (inputValue === null) return;
//     setTree(insertNode(tree, inputValue));
//     setInputValue(null);
//   };

//   const handleRemove = () => {
//     setTree(null);
//     setInputValue(null);
//     setTraversalResult([]);
//   };

//   const insertNode = (root: TreeNode | null, value: number): TreeNode => {
//     if (!root) {
//       return { value };
//     }
//     if (value < root.value) {
//       root.left = insertNode(root.left ?? null, value);
//     } else {
//       root.right = insertNode(root.right ?? null, value);
//     }
//     return root;
//   };

//   const inOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(...inOrderTraversal(node.left ?? null));
//       result.push(node.value);
//       result.push(...inOrderTraversal(node.right ?? null));
//     }
//     return result;
//   };

//   const preOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(node.value);
//       result.push(...preOrderTraversal(node.left ?? null));
//       result.push(...preOrderTraversal(node.right ?? null));
//     }
//     return result;
//   };

//   const postOrderTraversal = (node: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (node) {
//       result.push(...postOrderTraversal(node.left ?? null));
//       result.push(...postOrderTraversal(node.right ?? null));
//       result.push(node.value);
//     }
//     return result;
//   };

//   const breadthFirstTraversal = (root: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (!root) return result;

//     const queue: TreeNode[] = [root];
//     while (queue.length) {
//       const node = queue.shift()!;
//       result.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return result;
//   };

//   const depthFirstTraversal = (root: TreeNode | null): number[] => {
//     const result: number[] = [];
//     if (!root) return result;

//     const stack: TreeNode[] = [root];
//     while (stack.length) {
//       const node = stack.pop()!;
//       result.push(node.value);
//       if (node.right) stack.push(node.right);
//       if (node.left) stack.push(node.left);
//     }
//     return result;
//   };

//   const handleInOrderTraversal = () => {
//     setTraversalResult(inOrderTraversal(tree));
//   };

//   const handlePreOrderTraversal = () => {
//     setTraversalResult(preOrderTraversal(tree));
//   };

//   const handlePostOrderTraversal = () => {
//     setTraversalResult(postOrderTraversal(tree));
//   };

//   const handleBreadthFirstTraversal = () => {
//     setTraversalResult(breadthFirstTraversal(tree));
//   };

//   const handleDepthFirstTraversal = () => {
//     setTraversalResult(depthFirstTraversal(tree));
//   };

//   const renderTree = (node: TreeNode | null): JSX.Element => {
//     if (!node) return <></>;
//     return (
//       <>
//         <div className="flex flex-col items-center">
//           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//             {node.value}
//           </div>
//           <div className="flex">
//             {node.left && renderTree(node.left)}
//             {node.right && renderTree(node.right)}
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="bg-slate-400 min-h-screen flex flex-col gap-6 text-center">
//       <div className="flex flex-col gap-8 bg-green-600 text-white">
//         <h1 className="text-5xl font-semibold pt-7">Binary Tree Visualiser</h1>
//         <div className="flex items-center justify-center flex-row gap-10">
//           <button
//             className="text-lg bg-green-900 px-8 py-2 rounded-3xl"
//             onClick={handleInsert}
//           >
//             Insert
//           </button>
//           <input
//             className="bg-white text-normal px-6 py-2 rounded-3xl text-black"
//             type="number"
//             name="name"
//             placeholder="Enter Tree Key"
//             value={inputValue === null ? "" : inputValue}
//             onChange={(e) => setInputValue(parseInt(e.target.value))}
//           />
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handleRemove}
//           >
//             Remove
//           </button>
//         </div>

//         <div className="flex flex-row justify-center gap-10 pb-8">
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handleInOrderTraversal}
//           >
//             In-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handlePreOrderTraversal}
//           >
//             Pre-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handlePostOrderTraversal}
//           >
//             Post-Order Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handleBreadthFirstTraversal}
//           >
//             Breadth-First Traversal
//           </button>
//           <button
//             className="text-lg bg-green-900 px-6 py-2 rounded-3xl"
//             onClick={handleDepthFirstTraversal}
//           >
//             Depth-First Traversal
//           </button>
//         </div>
//       </div>
//       <div>
//         {tree ? (
//           <div className="flex justify-center mt-8">
//             <div className="relative">{renderTree(tree)}</div>
//           </div>
//         ) : (
//           <h2>Tree is empty. Try adding a node.</h2>
//         )}
//       </div>
//       <div>
//         {traversalResult.length > 0 && (
//           <div>
//             <h2>Traversal Result:</h2>
//             <p>{traversalResult.join(", ")}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// till above binary tree and traversal working but not remove button
// --------------------------------------------------------------------------------------
