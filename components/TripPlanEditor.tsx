'use client';

import { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  DollarSign, 
  Link as LinkIcon, 
  CheckSquare, 
  Edit2, 
  Save, 
  X,
  Plus,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TripPlan, Place } from '@/lib/supabase';

interface TripPlanEditorProps {
  plan: TripPlan;
  place: Place;
  onUpdate: (updates: Partial<TripPlan>) => void;
  onClose: () => void;
}

export default function TripPlanEditor({ plan, place, onUpdate, onClose }: TripPlanEditorProps) {
  const [notes, setNotes] = useState(plan.notes || '');
  const [startDate, setStartDate] = useState(plan.planned_start_date || '');
  const [endDate, setEndDate] = useState(plan.planned_end_date || '');
  const [budget, setBudget] = useState(plan.budget_estimate?.toString() || '');
  const [priority, setPriority] = useState(plan.priority || 'maybe');
  const [customLinks, setCustomLinks] = useState(plan.custom_links || []);
  const [checklist, setChecklist] = useState(plan.checklist || []);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [newChecklistItem, setNewChecklistItem] = useState('');

  const handleSave = () => {
    onUpdate({
      notes,
      planned_start_date: startDate || undefined,
      planned_end_date: endDate || undefined,
      budget_estimate: budget ? parseFloat(budget) : undefined,
      priority: priority as any,
      custom_links: customLinks,
      checklist
    });
  };

  const addLink = () => {
    if (newLinkTitle && newLinkUrl) {
      setCustomLinks([...customLinks, { title: newLinkTitle, url: newLinkUrl }]);
      setNewLinkTitle('');
      setNewLinkUrl('');
    }
  };

  const removeLink = (index: number) => {
    setCustomLinks(customLinks.filter((_, i) => i !== index));
  };

  const addChecklistItem = () => {
    if (newChecklistItem) {
      setChecklist([...checklist, { text: newChecklistItem, done: false }]);
      setNewChecklistItem('');
    }
  };

  const toggleChecklistItem = (index: number) => {
    setChecklist(checklist.map((item, i) => 
      i === index ? { ...item, done: !item.done } : item
    ));
  };

  const removeChecklistItem = (index: number) => {
    setChecklist(checklist.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-pink-500 fill-current" />
            <div>
              <h2 className="text-xl font-bold text-white">{place.name}</h2>
              <p className="text-sm text-gray-400">Plan your visit</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Priority */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Priority</label>
            <div className="flex gap-2">
              {['must-see', 'maybe', 'backup'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`px-4 py-2 rounded-lg capitalize transition ${
                    priority === p
                      ? p === 'must-see' ? 'bg-red-500 text-white' :
                        p === 'maybe' ? 'bg-yellow-500 text-white' :
                        'bg-gray-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {p.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Budget Estimate (USD)
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter estimated budget"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <Edit2 className="w-4 h-4" />
              Personal Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your thoughts, tips, plans..."
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 resize-none"
            />
          </div>

          {/* Custom Links */}
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              Useful Links
            </label>
            <div className="space-y-2 mb-3">
              {customLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-cyan-400 hover:underline flex items-center gap-2"
                  >
                    {link.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => removeLink(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newLinkTitle}
                onChange={(e) => setNewLinkTitle(e.target.value)}
                placeholder="Link title"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              />
              <input
                type="url"
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
                placeholder="URL"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              />
              <button
                onClick={addLink}
                className="px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Checklist
            </label>
            <div className="space-y-2 mb-3">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <button
                    onClick={() => toggleChecklistItem(index)}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition ${
                      item.done ? 'bg-green-500 border-green-500' : 'border-white/20'
                    }`}
                  >
                    {item.done && <CheckSquare className="w-3 h-3 text-white" />}
                  </button>
                  <span className={`flex-1 ${item.done ? 'line-through text-gray-500' : 'text-white'}`}>
                    {item.text}
                  </span>
                  <button
                    onClick={() => removeChecklistItem(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newChecklistItem}
                onChange={(e) => setNewChecklistItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addChecklistItem()}
                placeholder="Add a task..."
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              />
              <button
                onClick={addChecklistItem}
                className="px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
