export type TopicMeta = {
  slug: string;
  title: string;
  description: string;
  startHere: string[];
  keyQuestions: string[];
  coreConcepts: { term: string; definition: string }[];
};

export const topics: TopicMeta[] = [
  {
    slug: 'agi',
    title: 'AGI',
    description:
      'Research directions, scaling debates, and architectural bets toward general intelligence — without treating AGI as a marketing label.',
    startHere: [
      'a-map-of-current-agi-research-directions',
      'why-next-token-prediction-may-not-be-enough',
      'frontier-ai-foundations',
    ],
    keyQuestions: [
      'What capabilities are still missing from current systems?',
      'Which research programs are genuinely pursuing generality vs. narrow scaling?',
      'How should we evaluate progress toward AGI?',
      'What role do world models and planning play?',
    ],
    coreConcepts: [
      { term: 'Generality', definition: 'Breadth of tasks and environments a system can handle without retraining.' },
      { term: 'Scaling hypothesis', definition: 'The claim that larger models and data unlock qualitatively new capabilities.' },
      { term: 'Agency', definition: 'Goal-directed behavior, planning, and tool use over extended horizons.' },
    ],
  },
  {
    slug: 'world-models',
    title: 'World Models',
    description:
      'Latent prediction, environment models, and planning — and why many researchers think next-token prediction alone is insufficient.',
    startHere: [
      'world-models-explained',
      'why-next-token-prediction-may-not-be-enough',
      'jepa-and-latent-prediction',
    ],
    keyQuestions: [
      'Can world models scale to open-ended environments?',
      'Do they require embodiment or multimodal grounding?',
      'Are they complementary to LLMs or replacements?',
      'What does planning require from a learned model?',
    ],
    coreConcepts: [
      { term: 'World model', definition: 'An internal model that predicts future states of an environment.' },
      { term: 'Latent prediction', definition: 'Learning in representation space rather than raw pixel or token space.' },
      { term: 'JEPA', definition: 'Joint Embedding Predictive Architecture — predict in embedding space with masked views.' },
    ],
  },
  {
    slug: 'energy-based-models',
    title: 'Energy-Based Models',
    description:
      'Compatibility scores, contrastive learning, and why EBMs resurface in discussions of world models and predictive learning.',
    startHere: [
      'energy-based-models-explained',
      'ebms-and-world-models',
    ],
    keyQuestions: [
      'How do EBMs differ from discriminative predictors?',
      'What are the training and scaling bottlenecks?',
      'Where do EBMs connect to modern latent prediction work?',
    ],
    coreConcepts: [
      { term: 'Energy function', definition: 'A scalar score where low energy means a configuration is plausible.' },
      { term: 'Contrastive learning', definition: 'Training by pushing down energy on positives and up on negatives.' },
      { term: 'Compatibility', definition: 'Whether two parts of a system (e.g. context and prediction) fit together.' },
    ],
  },
  {
    slug: 'evaluation',
    title: 'Evaluation',
    description:
      'Benchmarks, leaderboards, and what they actually measure — including when evaluation drives the wrong incentives.',
    startHere: [
      'a-map-of-ai-evaluation',
      'benchmarks-that-matter',
      'evaluation-and-generalization',
    ],
    keyQuestions: [
      'Which benchmarks correlate with real-world capability?',
      'How do we detect contamination and overfitting to tests?',
      'What evaluation is needed for agents and long-horizon tasks?',
    ],
    coreConcepts: [
      { term: 'Leaderboard overfitting', definition: 'Optimizing for benchmark scores without broader capability gains.' },
      { term: 'Contamination', definition: 'Test data appearing in pretraining corpora, inflating scores.' },
      { term: 'Capability eval', definition: 'Task suites designed to probe specific skills, not single metrics.' },
    ],
  },
  {
    slug: 'compute',
    title: 'Compute',
    description:
      'Training clusters, inference economics, chips, and the infrastructure constraints that shape frontier research.',
    startHere: [
      'compute-and-frontier-labs',
      'inference-economics',
      'a-map-of-ai-infrastructure',
    ],
    keyQuestions: [
      'How does compute availability gate who can run frontier experiments?',
      'What is the trajectory of inference cost vs. capability?',
      'How do export controls and supply chains affect research?',
    ],
    coreConcepts: [
      { term: 'FLOPs', definition: 'Floating-point operations — a rough currency for training and inference cost.' },
      { term: 'MFU', definition: 'Model FLOPs utilization — how efficiently hardware is used during training.' },
      { term: 'Inference economics', definition: 'Cost and latency of serving models at scale.' },
    ],
  },
  {
    slug: 'interpretability',
    title: 'Interpretability',
    description:
      'Mechanistic understanding of neural networks — circuits, features, and what we can actually explain today.',
    startHere: [
      'interpretability-primer',
      'circuits-and-features',
      'what-mechanistic-interpretability-can-claim',
    ],
    keyQuestions: [
      'Which interpretability results scale to frontier models?',
      'Can interpretability inform safety interventions?',
      'What is explanation vs. post-hoc narrative?',
    ],
    coreConcepts: [
      { term: 'Mechanistic interpretability', definition: 'Reverse-engineering algorithms implemented inside networks.' },
      { term: 'Feature', definition: 'A direction or neuron pattern that responds to a coherent concept.' },
      { term: 'Circuit', definition: 'A subgraph of computation implementing a specific behavior.' },
    ],
  },
  {
    slug: 'ai-safety',
    title: 'AI Safety',
    description:
      'Alignment, misuse, deployment risks, and governance — with technical claims separated from policy debate where possible.',
    startHere: [
      'ai-safety-landscape',
      'alignment-problems-stated-clearly',
      'deployment-and-misuse',
    ],
    keyQuestions: [
      'What failure modes scale with capability?',
      'Which safety interventions are empirically testable today?',
      'How should labs balance capability and safety research?',
    ],
    coreConcepts: [
      { term: 'Alignment', definition: 'Ensuring systems pursue intended goals and behave reliably under distribution shift.' },
      { term: 'Misuse', definition: 'Deliberate harmful application of capable systems.' },
      { term: 'Evals for safety', definition: 'Structured tests for deception, jailbreaks, and dangerous capabilities.' },
    ],
  },
  {
    slug: 'open-source-ai',
    title: 'Open Source AI',
    description:
      'Open weights, reproducibility, community models, and the tradeoffs between openness and concentrated capability.',
    startHere: [
      'open-weights-landscape',
      'reproducibility-in-ml',
    ],
    keyQuestions: [
      'What does “open” mean — weights, data, training code, or all three?',
      'How does open release affect safety and misuse?',
      'Can open models close the gap to closed frontier systems?',
    ],
    coreConcepts: [
      { term: 'Open weights', definition: 'Public model parameters without necessarily full training stack.' },
      { term: 'Reproducibility', definition: 'Ability for independent groups to replicate reported results.' },
      { term: 'Capability diffusion', definition: 'Spread of frontier techniques via open releases and papers.' },
    ],
  },
  {
    slug: 'india-ai',
    title: 'India & AI',
    description:
      'India’s role in AI research, talent, policy, and industry — and how global frontier dynamics intersect with local context.',
    startHere: [
      'india-and-frontier-ai',
      'ai-policy-in-india',
    ],
    keyQuestions: [
      'Where is India investing in AI research and infrastructure?',
      'How do global model access and compute constraints affect Indian labs?',
      'What policy choices matter for domestic capability building?',
    ],
    coreConcepts: [
      { term: 'Compute sovereignty', definition: 'Domestic access to training and inference capacity.' },
      { term: 'Talent pipeline', definition: 'Researchers, engineers, and institutions feeding frontier work.' },
      { term: 'Application layer', definition: 'Deploying global models vs. building foundational systems locally.' },
    ],
  },
  {
    slug: 'data-efficient-ai',
    title: 'Data-Efficient AI',
    description:
      'Learning with less data — sample efficiency, synthetic data, curriculum, and architectures that reduce data hunger.',
    startHere: [
      'a-map-of-data-efficient-language-modeling',
      'sample-efficiency-basics',
    ],
    keyQuestions: [
      'Can we match frontier performance with less high-quality data?',
      'What is the role of synthetic data vs. contamination risk?',
      'Which inductive biases improve data efficiency?',
    ],
    coreConcepts: [
      { term: 'Sample efficiency', definition: 'Performance achieved per unit of training data or compute.' },
      { term: 'Synthetic data', definition: 'Model- or rule-generated training examples.' },
      { term: 'Inductive bias', definition: 'Architectural or training assumptions that constrain the hypothesis space.' },
    ],
  },
];

export const topicsBySlug = Object.fromEntries(
  topics.map((t) => [t.slug, t]),
) as Record<string, TopicMeta>;

export function getTopic(slug: string): TopicMeta | undefined {
  return topicsBySlug[slug.toLowerCase()];
}

export const getTopicBySlug = getTopic;
