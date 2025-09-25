"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/advanced-utils"

interface ArchitectureNode {
  id: string
  label: string
  type: "frontend" | "backend" | "database" | "service" | "api"
  description: string
  technologies: string[]
  connections: string[]
  position: { x: number; y: number }
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: "frontend",
    label: "Frontend Layer",
    type: "frontend",
    description: "Next.js 14 with App Router, TypeScript, and Tailwind CSS",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    connections: ["api-gateway", "cdn"],
    position: { x: 20, y: 20 },
  },
  {
    id: "api-gateway",
    label: "API Gateway",
    type: "api",
    description: "Centralized API management with rate limiting and authentication",
    technologies: ["Node.js", "Express", "JWT", "Redis"],
    connections: ["microservices", "auth-service"],
    position: { x: 50, y: 40 },
  },
  {
    id: "microservices",
    label: "Microservices",
    type: "backend",
    description: "Scalable microservices architecture with Docker containers",
    technologies: ["Docker", "Kubernetes", "Node.js", "Python"],
    connections: ["database", "cache"],
    position: { x: 80, y: 60 },
  },
  {
    id: "database",
    label: "Database Cluster",
    type: "database",
    description: "PostgreSQL with read replicas and automated backups",
    technologies: ["PostgreSQL", "Redis", "MongoDB"],
    connections: [],
    position: { x: 80, y: 80 },
  },
  {
    id: "cdn",
    label: "CDN & Edge",
    type: "service",
    description: "Global content delivery with edge computing capabilities",
    technologies: ["Vercel Edge", "CloudFlare", "AWS CloudFront"],
    connections: ["frontend"],
    position: { x: 20, y: 60 },
  },
  {
    id: "auth-service",
    label: "Auth Service",
    type: "service",
    description: "OAuth 2.0, JWT tokens, and multi-factor authentication",
    technologies: ["Auth0", "JWT", "OAuth 2.0", "SAML"],
    connections: ["database"],
    position: { x: 50, y: 80 },
  },
  {
    id: "cache",
    label: "Caching Layer",
    type: "service",
    description: "Multi-level caching with Redis and in-memory storage",
    technologies: ["Redis", "Memcached", "CDN Cache"],
    connections: ["microservices"],
    position: { x: 20, y: 40 },
  },
]

export function SystemArchitecture() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const getNodeColor = (type: string) => {
    switch (type) {
      case "frontend":
        return "bg-blue-500/20 border-blue-500"
      case "backend":
        return "bg-green-500/20 border-green-500"
      case "database":
        return "bg-purple-500/20 border-purple-500"
      case "service":
        return "bg-orange-500/20 border-orange-500"
      case "api":
        return "bg-red-500/20 border-red-500"
      default:
        return "bg-gray-500/20 border-gray-500"
    }
  }

  const getConnectionPath = (from: ArchitectureNode, to: ArchitectureNode) => {
    const fromX = from.position.x + 10
    const fromY = from.position.y + 5
    const toX = to.position.x + 10
    const toY = to.position.y + 5

    return `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${(fromY + toY) / 2 - 20} ${toX} ${toY}`
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Architecture Diagram */}
        <div className="lg:col-span-2">
          <Card className="p-6 h-96 relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-4">System Architecture</h3>

            <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
              {/* Connections */}
              {architectureNodes.map((node) =>
                node.connections.map((connectionId) => {
                  const targetNode = architectureNodes.find((n) => n.id === connectionId)
                  if (!targetNode) return null

                  return (
                    <path
                      key={`${node.id}-${connectionId}`}
                      d={getConnectionPath(node, targetNode)}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-muted-foreground opacity-50"
                      strokeDasharray="2,2"
                    />
                  )
                }),
              )}

              {/* Nodes */}
              {architectureNodes.map((node) => (
                <g key={node.id}>
                  <rect
                    x={node.position.x}
                    y={node.position.y}
                    width="20"
                    height="10"
                    rx="2"
                    className={cn(
                      "cursor-pointer transition-all duration-200",
                      getNodeColor(node.type),
                      hoveredNode === node.id && "scale-110 shadow-lg",
                      selectedNode?.id === node.id && "ring-2 ring-primary",
                    )}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setSelectedNode(node)}
                  />
                  <text
                    x={node.position.x + 10}
                    y={node.position.y + 6}
                    textAnchor="middle"
                    className="text-xs fill-current pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </Card>
        </div>

        {/* Node Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Architecture Details</h3>

          {selectedNode ? (
            <Card className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={cn("w-4 h-4 rounded", getNodeColor(selectedNode.type))}></div>
                  <h4 className="font-semibold">{selectedNode.label}</h4>
                </div>

                <p className="text-sm text-muted-foreground">{selectedNode.description}</p>

                <div>
                  <h5 className="text-sm font-medium mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedNode.connections.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium mb-2">Connections:</h5>
                    <div className="space-y-1">
                      {selectedNode.connections.map((connectionId) => {
                        const connectedNode = architectureNodes.find((n) => n.id === connectionId)
                        return connectedNode ? (
                          <div
                            key={connectionId}
                            className="text-xs text-muted-foreground cursor-pointer hover:text-foreground"
                            onClick={() => setSelectedNode(connectedNode)}
                          >
                            → {connectedNode.label}
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ) : (
            <Card className="p-4">
              <p className="text-sm text-muted-foreground">
                Click on any node in the diagram to view detailed information about that component.
              </p>
            </Card>
          )}

          {/* Legend */}
          <Card className="p-4">
            <h4 className="font-medium mb-3">Component Types</h4>
            <div className="space-y-2">
              {[
                { type: "frontend", label: "Frontend" },
                { type: "backend", label: "Backend" },
                { type: "database", label: "Database" },
                { type: "service", label: "Service" },
                { type: "api", label: "API" },
              ].map(({ type, label }) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded", getNodeColor(type))}></div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
