'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Bell, Send, Users, Target, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NotificationForm {
  title: string;
  body: string;
  targetAudience: 'all' | 'specific' | 'segment';
  userSegment?: 'all' | 'admin' | 'regular';
  specificEmails?: string;
  scheduledFor?: string;
}

interface SentNotification {
  id: string;
  title: string;
  body: string;
  targetAudience: string;
  sentAt: string;
  recipients: number;
  status: 'sent' | 'sending' | 'failed';
}

export default function AdminNotificationsPage() {
  const { toast } = useToast();
  const [form, setForm] = useState<NotificationForm>({
    title: '',
    body: '',
    targetAudience: 'all',
    userSegment: 'all',
    specificEmails: '',
    scheduledFor: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sentNotifications, setSentNotifications] = useState<SentNotification[]>([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count and sent notifications
    fetchUserCount();
    fetchSentNotifications();
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await fetch('/api/admin/users/count');
      if (response.ok) {
        const data = await response.json();
        setUserCount(data.count);
      }
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };

  const fetchSentNotifications = async () => {
    try {
      const response = await fetch('/api/admin/notifications');
      if (response.ok) {
        const data = await response.json();
        const notifications = data.notifications || [];
        console.log('Fetched notifications:', notifications); // Debug log
        setSentNotifications(Array.isArray(notifications) ? notifications : []);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setSentNotifications([]); // Ensure it's always an array
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.title.trim() || !form.body.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in both title and body fields.',
        variant: 'destructive'
      });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch('/api/admin/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Notification Sent!',
          description: `Successfully sent to ${data.recipients} users.`,
        });
        
        // Reset form
        setForm({
          title: '',
          body: '',
          targetAudience: 'all',
          userSegment: 'all',
          specificEmails: '',
          scheduledFor: ''
        });
        
        // Refresh notifications list
        fetchSentNotifications();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send notification');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send notification',
        variant: 'destructive'
      });
    } finally {
      setIsSending(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return <Badge className="bg-green-500">Sent</Badge>;
      case 'sending':
        return <Badge className="bg-yellow-500">Sending</Badge>;
      case 'failed':
        return <Badge className="bg-red-500">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Bell className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Push Notifications</h1>
            <p className="text-muted-foreground">
              Send push notifications to your app users
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{userCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Notifications Sent</p>
                  <p className="text-2xl font-bold">{sentNotifications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Send className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">
                    {sentNotifications.length > 0 
                      ? Math.round((sentNotifications.filter(n => n.status === 'sent').length / sentNotifications.length) * 100)
                      : 0}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Send Notification Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send New Notification</CardTitle>
            <CardDescription>
              Compose and send push notifications to your users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Notification Title *</Label>
                  <Input
                    id="title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Enter notification title"
                    maxLength={50}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {form.title.length}/50 characters
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Select
                    value={form.targetAudience}
                    onValueChange={(value: 'all' | 'specific' | 'segment') => 
                      setForm({ ...form, targetAudience: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="segment">User Segment</SelectItem>
                      <SelectItem value="specific">Specific Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="body">Notification Message *</Label>
                <Textarea
                  id="body"
                  value={form.body}
                  onChange={(e) => setForm({ ...form, body: e.target.value })}
                  placeholder="Enter notification message"
                  rows={3}
                  maxLength={200}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  {form.body.length}/200 characters
                </p>
              </div>

              {/* Conditional Fields */}
              {form.targetAudience === 'segment' && (
                <div className="space-y-2">
                  <Label htmlFor="userSegment">User Segment</Label>
                  <Select
                    value={form.userSegment}
                    onValueChange={(value: 'all' | 'admin' | 'regular') => 
                      setForm({ ...form, userSegment: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="admin">Admin Users Only</SelectItem>
                      <SelectItem value="regular">Regular Users Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {form.targetAudience === 'specific' && (
                <div className="space-y-2">
                  <Label htmlFor="specificEmails">User Emails (comma-separated)</Label>
                  <Input
                    id="specificEmails"
                    value={form.specificEmails}
                    onChange={(e) => setForm({ ...form, specificEmails: e.target.value })}
                    placeholder="user1@example.com, user2@example.com"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="scheduledFor">Schedule For (Optional)</Label>
                <Input
                  id="scheduledFor"
                  type="datetime-local"
                  value={form.scheduledFor}
                  onChange={(e) => setForm({ ...form, scheduledFor: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty to send immediately
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={isSending || !form.title.trim() || !form.body.trim()}
                className="w-full"
              >
                {isSending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Notification
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sent Notifications History */}
        <Card>
          <CardHeader>
            <CardTitle>Notification History</CardTitle>
            <CardDescription>
              Track all sent notifications and their delivery status
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sentNotifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No notifications sent yet</p>
                <p className="text-sm">Send your first notification above</p>
              </div>
            ) : (
              <div className="space-y-3">
                {sentNotifications
                  .filter(notification => notification && typeof notification === 'object')
                  .map((notification, index) => {
                    // Ensure all required properties exist
                    if (!notification.title || !notification.body) {
                      console.warn('Invalid notification object:', notification);
                      return null;
                    }
                    
                    return (
                      <div
                        key={notification.id || `notification-${index}`}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{notification.title}</h4>
                            {getStatusBadge(notification.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {notification.body}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              {notification.targetAudience}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {notification.recipients} recipients
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(notification.sentAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  .filter(Boolean)}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

